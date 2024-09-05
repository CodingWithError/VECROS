import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', 
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#f5f5f5', 
            paper: '#ffffff', 
        },
        text: {
            primary: '#333333', 
            secondary: '#666666', 
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '2rem', 
            fontWeight: 700, 
        },
        h2: {
            fontSize: '1.75rem', 
            fontWeight: 600, 
        },
        h3: {
            fontSize: '1.5rem', 
            fontWeight: 500, 
        },
        body1: {
            fontSize: '1rem', 
            lineHeight: 1.5, 
        },
    },
    spacing: 8, 
});
export default theme;
