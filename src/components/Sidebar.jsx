import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

const categories = [
    'Technology',
    'Travel',
    'Food',
    'Lifestyle',
    'Health',
];
const Sidebar = () => {
    const history = useHistory();
    return (
        <Box sx={{ width: 250, bgcolor: 'background.paper', padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                Categories
            </Typography>
            <List>
                {categories.map((category) => (
                    <ListItem button key={category} onClick={() => history.push(`/category/${category}`)}>
                        <ListItemText primary={category} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
