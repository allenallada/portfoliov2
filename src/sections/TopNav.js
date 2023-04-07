import { Box, IconButton, Stack } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function TopNav() {
    return (
        <Box
            component="header"
            sx={{
                position: 'fixed',
                color: 'common.white',
                top: 0,
                maxHeight: '12rem',
                padding: '3em',
                background: 'transparent',
                width: '100%',
                fontSize: '1vw',
                scrollSnapAlign: 'center',
                zIndex: '100',
            }}>
            <Stack
                alignItems="center"
                direction="row"
                spacing={2}
                justifyContent="space-between">
                <Box
                    component="img"
                    sx={{
                        width: '5em',
                        height: '5em',
                    }}
                    alt="My Logo"
                    src="\img\green-no-bg.png"></Box>
                <Box>
                    <IconButton>
                        <MenuIcon
                            sx={{
                                color: 'indigo.darkest',
                                fontSize: '1.5em',
                            }}
                        />
                    </IconButton>
                </Box>
            </Stack>
        </Box>
    );
}

export default TopNav;
