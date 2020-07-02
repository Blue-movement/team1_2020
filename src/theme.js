import React from 'react'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

// Generated from https://react-theming.github.io/create-mui-theme/
var palette = {
  primary: { main: '#000000', contrastText: '#FFC107' },
  secondary: { main: '#FFC107' }
};
var themeName = 'BLM_Theme';


// Applies the theme on the component passed in based on the palette provided
export default function makeComponentFromTheme (newComponent, newPalette=palette, newThemeName=themeName) {
  palette = newPalette;
  themeName = newThemeName;
  return () => {
    return (
      <ThemeProvider theme={createMuiTheme({ palette, themeName })}>{newComponent}</ThemeProvider>
    )
  }
}