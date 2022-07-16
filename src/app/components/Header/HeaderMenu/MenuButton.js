import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

const MenuButton = ({ pageName, pageAddress }) => {
  const history = useHistory();

  const navigateToPageAddress = () => {
    history.push(pageAddress);
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
