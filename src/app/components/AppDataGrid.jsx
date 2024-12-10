/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
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
  height = 350,
  defaultSelectedRow = "",
  showSearching = false,
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
        <Button
          size="small"
          variant="text"
          color="primary"
          onClick={() => onEditRow(params.row)}
        >
          <EditIcon fontSize="small" />
        </Button>
        <Button
          size="small"
          variant="text"
          color="secondary"
          onClick={() => onDeleteRow(params.row)}
        >
          <DeleteIcon fontSize="small" />
        </Button>
      </Box>
    ),
  };

  useEffect(() => {
    setEnhancedColumns(showAction ? [...columns, actionColumn] : columns);
    setSelectedRow1(defaultSelectedRow);
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
      {label && (
        <Typography
          fontSize={15}
          display={"flex"}
          justifyContent={"space-between"}
          fontWeight={700}
        >
          {label}

          {moreLink && (
            <Button onClick={() => naviGate(moreLink)}>View More</Button>
          )}
        </Typography>
      )}
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
            }}
          />
        </Box>
      )}
      <DataGrid
        rows={filteredRows}
        disableColumnFilter
        columns={enhancedColumns}
        pageSize={paginationModel.pageSize}
        pageSizeOptions={pageSizeOptions}
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
