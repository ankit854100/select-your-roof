// Settings.tsx
import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, Typography } from '@mui/material';

interface SettingsProps {
  color: string;
  thickness: number;
  onColorChange: (color: string) => void;
  onThicknessChange: (thickness: number) => void;
  setShowSettings: (arg: boolean) => void
}

const Settings: React.FC<SettingsProps> = ({ color, thickness, onColorChange, onThicknessChange, setShowSettings }) => {
  const handleColorChange = (event: SelectChangeEvent) => {
    onColorChange(event.target.value as string);
  };

  const handleThicknessChange = (event: Event, newValue: number | number[]) => {
    onThicknessChange(newValue as number);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '3rem 5rem' }}>
      <Typography variant="h4" component="h4">
        Choose the color and thickness of ink for selecting the image
      </Typography>
      <FormControl variant="outlined" size="small">
        <InputLabel>Color</InputLabel>
        <Select
          value={color}
          onChange={handleColorChange}
          label="Color"
        >
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="black">Black</MenuItem>
          <MenuItem value="white">white</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ width: 200 }}>
        <InputLabel>Thickness</InputLabel>
        <Slider
          value={thickness}
          onChange={handleThicknessChange}
          aria-labelledby="thickness-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
        />
      </Box>
      <Button onClick={() => setShowSettings(false)} variant="contained" sx={{ width: '10rem' }}> Apply settings</Button>
    </Box>
  );
};

export default Settings;
