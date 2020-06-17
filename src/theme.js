import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#484848',
        main: '#212121',
        dark: '#000000',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#ff5131',
        main: '#d50000',
        dark: '#9b0000',
        contrastText: '#ffffff',
      },
    },
  });

  export default theme