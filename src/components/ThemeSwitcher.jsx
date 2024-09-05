import React, { useContext } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext'; 

const ThemeSwitcher = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext); 
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    color="default"
                />
            }
            label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
        />
    );
};

export default ThemeSwitcher;
