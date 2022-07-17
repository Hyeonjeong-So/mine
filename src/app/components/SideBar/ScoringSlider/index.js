import React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}`;
}

const ScoringSlider = () => {
  return (
    <Box sx={{ width: 250, marginTop: 5, marginLeft: 1 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={5}
        valueLabelDisplay="auto "
        marks={marks}
      />
    </Box>
  );
};

export default ScoringSlider;
