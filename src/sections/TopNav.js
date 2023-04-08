import { Box, IconButton, Stack } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function TopNav() {
    return (
        <Box
            component="header"
            sx={(theme) => ({
                position: 'fixed',
                color: 'common.white',
                top: 0,
                maxHeight: '12rem',
                padding: '3em',
                background: 'transparent',
                width: '100%',
                scrollSnapAlign: 'center',
                zIndex: '100',
                [theme.breakpoints.down('md')]: {
                    padding: '2em',
                },
            })}>
            <Stack
                alignItems="center"
                direction="row"
                spacing={2}
                justifyContent="space-between">
                <Box
                    component="img"
                    sx={(theme) => ({
                        width: '5em',
                        height: '5em',
                        [theme.breakpoints.down('md')]: {
                            width: '3.5em',
                            height: '3.5em',
                        },
                    })}
                    alt="My Logo"
                    src="\img\green-no-bg.png"></Box>
                <Box>
                    <IconButton>
                        <MenuIcon
                            sx={(theme) => ({
                                color: 'indigo.darkest',
                                fontSize: '1.5em',
                                [theme.breakpoints.down('md')]: {
                                    color: 'success.dark',
                                    fontSize: '1em',
                                },
                            })}
                        />
                    </IconButton>
                </Box>
            </Stack>
        </Box>
    );
}

export default TopNav;
