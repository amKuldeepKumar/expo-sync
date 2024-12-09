/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

/**
 * DataGridComponent - A reusable DataGrid component.
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
  ...props
}) => {
  const [enhancedColumns, setEnhancedColumns] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  const [selectedRow1, setSelectedRow1] = useState([defaultSelectedRow]);

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
        <Typography fontSize={15} fontWeight={700}>
          {label}
        </Typography>
      )}
      <DataGrid
        rows={rows}
        columns={enhancedColumns}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={showCheckBox}
        disableColumnSelector={true}
        onSelectionModelChange={handleRowSelection}
        pagination
        rowSelectionModel={selectedRow1}
        onRowClick={handleRowClick}
        {...props}
      />
    </Box>
  );
};

export default AppDataGrid;
