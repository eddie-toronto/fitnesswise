import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationDrawer = ({ isOpen, toggleDrawer }) => {
    const menuItems = [
        { text: 'Home', path: '/' },
        { text: 'Workouts', path: '/workouts' },
        { text: 'Profile', path: '/profile' },
        { text: 'Settings', path: '/settings' },
    ];

    return (
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key={index} component={Link} to={item.path} onClick={toggleDrawer}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default NavigationDrawer;