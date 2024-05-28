import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IAppBarProps } from '../../interfaces';

const CustomAppBar: React.FC<IAppBarProps> = (props: IAppBarProps) => {
    const { mode, toggleTheme } = props;
  return (
    <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Select your roof
            </Typography>
            <Button 
              color="inherit" sx={{ textTransform: 'none' }}
              onClick={toggleTheme}
            >
              { mode === 'light' ? <DarkModeIcon sx={{ marginRight: '0.25rem'}}/> : <LightModeIcon sx={{ marginRight: '0.25rem'}}/> }
              { mode === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </Toolbar>
        </AppBar>
  )
}

export default CustomAppBar