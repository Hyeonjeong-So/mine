import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MenuButton = ({ pageName, pageAddress }) => {
  const navigate = useNavigate();
  const navigateToPageAddress = () => {
    navigate(pageAddress);
  };

  return (
    <Button
      onClick={navigateToPageAddress}
      sx={{ my: 2, color: '#fff9c4', display: 'block' }}
    >
      {pageName}
    </Button>
  );
};

export default MenuButton;
