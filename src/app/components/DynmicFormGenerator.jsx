/* eslint-disable react/prop-types */

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

const DynamicFormGenerator = ({ columns = [] }) => {
  const [cards, setCards] = useState([{ id: 1, data: {} }]);

  const handleChange = (cardId, event) => {
    const { name, value } = event.target;
    setCards((prev) =>
      prev.map((card) =>
        card.id === cardId
          ? { ...card, data: { ...card.data, [name]: value } }
          : card
      )
    );
  };

  const renderField = (col, card) => {
    const commonProps = {
      fullWidth: true,
      name: col.name,
      label: col.label,
      value: card.data[col.name] || "",
      onChange: (event) => handleChange(card.id, event),
      ...col,
    };

    switch (col.type) {
      case "text":
        return <TextField {...commonProps} required />;

      case "number":
        return <TextField {...commonProps} required type="number" />;

      case "date":
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...commonProps}
              onChange={(newValue) =>
                handleChange(card.id, {
                  target: { name: col.name, value: newValue },
                })
              }
            />
          </LocalizationProvider>
        );

      case "dateTime":
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              {...commonProps}
              onChange={(newValue) =>
                handleChange(card.id, {
                  target: { name: col.name, value: newValue },
                })
              }
            />
          </LocalizationProvider>
        );

      case "select":
        return (
          <Autocomplete
            options={col.options}
            renderInput={(params) => (
              <TextField {...params} label={col.label} />
            )}
          />
        );

      default:
        return null;
    }
  };

  const addCard = () => {
    setCards((prev) => [...prev, { id: Date.now(), data: {} }]);
  };

  const removeCard = (cardId) => {
    setCards((prev) => prev.filter((card) => card.id !== cardId));
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <>
            {columns.map((col, colIndex) => (
              <Grid item key={colIndex} md={5} xs={5}>
                {renderField(col, card)}
              </Grid>
            ))}
            <Grid item md={2} xs={2} display="flex" alignItems="center">
              {index > 0 && (
                <IconButton color="error" onClick={() => removeCard(card.id)}>
                  <DeleteIcon />
                </IconButton>
              )}
              {index == cards.length - 1 && (
                <Button
                  sx={{ mr: 2 }}
                  color="primary"
                  variant="outlined"
                  onClick={addCard}
                >
                  <AddIcon />
                </Button>
              )}
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default DynamicFormGenerator;
