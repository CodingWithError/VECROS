import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import the Redux store
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme'; // Import the theme
import './styles/global.css'; // Import global styles

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
);