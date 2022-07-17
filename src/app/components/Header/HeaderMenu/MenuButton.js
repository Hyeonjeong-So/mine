import React from 'react';
import Button from '@mui/material/Button';
import history from 'app/utils/history';

const MenuButton = ({ pageName, pageAddress }) => {
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
