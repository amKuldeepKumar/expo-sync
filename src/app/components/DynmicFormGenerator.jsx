/* eslint-disable react/prop-types */

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DynamicFormGenerator = ({ columns = [], onSaveClick }) => {
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
          <Select  {...commonProps}>
            {col.options.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
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

  const handleSave = () => {

   

    onSaveClick(cards.map((card) => card.data));
  };

  return (
    <Box>
      <TextField sx={{mb:2 , ml:3}}  variant="standard" label="Team Name" required />
      {cards.map((card, index) => (
        <Card key={card.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              {columns.map((col, colIndex) => (
                <Grid item key={colIndex} md={4} xs={12}>
                  {renderField(col, card)}
                </Grid>
              ))}
              <Grid item>
                {index > 0 && (
                  <IconButton color="error" onClick={() => removeCard(card.id)}>
                    <DeleteIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
      <Grid display="flex" justifyContent="flex-end" alignItems="center">
        <Button
          sx={{ mr: 2 }}
          color="primary"
          variant="outlined"
          onClick={addCard}
        >
          <AddIcon />
        </Button>
        <Button variant="outlined" onClick={handleSave}>
          Save
        </Button>
      </Grid>
    </Box>
  );
};

export default DynamicFormGenerator;
