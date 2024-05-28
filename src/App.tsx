import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Canvas from './components/Canvas';
import Settings from './components/Settings';
import CustomAppBar from './components/CustomAppBar';
import imageUrl from './assets/image.png';
import './App.css'

const App: React.FC = () => {
  const [mode, setMode] = useState<string>('light');
  const [color, setColor] = useState<string>('red');
  const [thickness, setThickness] = useState<number>(2);
  const [showSettings, setShowSettings] = useState<boolean>(true);

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const toggleTheme = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <CustomAppBar mode={mode} toggleTheme={toggleTheme} />
        { showSettings ? 
          <Box sx={{ padding: 4 }}>
            <Settings
                color={color}
                thickness={thickness}
                onColorChange={setColor}
                onThicknessChange={setThickness}
                setShowSettings={setShowSettings}
              />
          </Box> : 
          <Box sx={{ padding: 2 }}>
            <Canvas
              imageUrl={imageUrl}
              color={color}
              thickness={thickness}
              setShowSettings={setShowSettings}
            />
          </Box>
      }
      </Box>
    </ThemeProvider>
  );
};

export default App;
