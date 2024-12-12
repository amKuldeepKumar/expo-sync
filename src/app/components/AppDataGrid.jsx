/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CommentIcon from "@mui/icons-material/Comment";
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 6,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

/**
 * DataGridComponent - A reusable DataGrid component with search and pagination.
 * @param {Array} rows - The data rows to display.
 * @param {Array} columns - Column definitions for the grid.
 * @param {number} pageSize - Initial page size.
 * @param {Array} pageSizeOptions - Options for pagination page sizes.
 * @param {Function} onRowSelection - Callback for row selection.
 */
const AppDataGrid = ({
  rows = [],
  columns = [],
  pageSize = 5,
  label = "",
  pageSizeOptions = [5, 10, 20],
  onRowSelection = () => {},
  onRowClick = () => {},
  showCheckBox = false,
  showAction = false,
  onEditRow = () => {},
  onDeleteRow = () => {},
  height = 250,
  defaultSelectedRow = "",
  showSearching = false,
  newButton = false,
  commentIcon = false,
  moreLink = "",
  ...props
}) => {
  const [enhancedColumns, setEnhancedColumns] = useState([]);
  const naviGate = useNavigate();
  const [selectedRow, setSelectedRow] = useState([]);
  const [selectedRow1, setSelectedRow1] = useState([defaultSelectedRow]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: pageSize,
  });

  const actionColumn = {
    field: "actions",
    headerName: "Actions",
    width: 120,
    sortable: false,
    renderCell: (params) => (
      <Box>
        <IconButton
          size="small"
          variant="text"
          color="primary"
          onClick={() => onEditRow(params.row)}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          variant="text"
          color="secondary"
          onClick={() => onDeleteRow(params.row)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        {commentIcon && (
          <StyledBadge badgeContent={Math.floor(Math.random() * 20) < 2 ? 0 : Math.floor(Math.random() * 10)} color="primary">
            <IconButton size="small" variant="text" color="secondary">
              <CommentIcon fontSize="small" />
            </IconButton>
          </StyledBadge>
        )}
      </Box>
    ),
  };

  useEffect(() => {
    setEnhancedColumns(showAction ? [...columns, actionColumn] : columns);
    setSelectedRow1(defaultSelectedRow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns, showAction]);

  useEffect(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    setFilteredRows(
      rows.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(lowercasedTerm)
        )
      )
    );
  }, [searchTerm, rows]);

  const handleRowSelection = (selectionModel) => {
    const selectedRows = rows.filter((row) => selectionModel.includes(row.id));
    setSelectedRow(selectedRows.length > 0 ? selectedRows[0] : null); // Update selected row
    onRowSelection(selectedRows);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row.row);
    setSelectedRow1(row.row.id);
    onRowClick(row.row);
  };

  return (
    <Box sx={{ height: height }}>
      {showSearching && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            value={searchTerm}
            placeholder="Search Here...."
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "50px",
              },
              margin: "normal",
              width: "500px",
            }}
          />
        </Box>
      )}
      <Box display="flex" justifyContent="space-between">
        {label && (
          <Typography
            fontSize={15}
            display={"flex"}
            justifyContent={"space-between"}
            fontWeight={700}
          >
            {label}
          </Typography>
        )}
        {moreLink && (
          <Link
            underline="hover"
            sx={{ cursor: "pointer", fontWeight: 700, fontSize: 15 }}
            onClick={() => naviGate(moreLink)}
          >
            View More
          </Link>
        )}
        {newButton && (
          <Button size="small" sx={{ p: 0, fontWeight: "bold" }}>
            New +
          </Button>
        )}
      </Box>
      <DataGrid
        density="compact"
        rows={filteredRows}
        disableColumnFilter
        columns={enhancedColumns}
        pageSize={paginationModel.pageSize}
        // pageSizeOptions={pageSizeOptions}
        pagination
        checkboxSelection={showCheckBox}
        disableColumnSelector={true}
        onSelectionModelChange={handleRowSelection}
        rowSelectionModel={selectedRow1}
        onRowClick={handleRowClick}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        {...props}
      />
    </Box>
  );
};

export default AppDataGrid;
