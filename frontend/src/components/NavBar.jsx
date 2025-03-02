import React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<AppBar position="static" color="inherit" sx={{ backgroundColor: 'background.default' }}>
<Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        textColor="inherit"
        indicatorColor="secondary"
        centered
        variant="fullWidth"
        
      >
        <Tab icon={<PhoneIcon />} label="RECENTS" />
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
        <Tab icon={<PersonPinIcon />} label="NEARBY" />
      </Tabs>
    </AppBar>
  );
}