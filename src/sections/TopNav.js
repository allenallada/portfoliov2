import { Box, IconButton, Stack, Menu, MenuItem, Link } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function TopNav() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    display: 'none',
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
                            width: '3em',
                            height: '3em',
                        },
                    })}
                    alt="My Logo"
                    src="\img\green-no-bg.png"></Box>
                <Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{
                            horizontal: 'right',
                            vertical: 'top',
                        }}
                        anchorOrigin={{
                            horizontal: 'right',
                            vertical: 'bottom',
                        }}>
                        <MenuItem onClick={handleClose}>
                            <Link
                                variant="subtitle1"
                                underline="none"
                                color="indigo.darkest"
                                sx={{
                                    cursor: 'pointer',
                                }}>
                                Personal Projects
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link
                                variant="subtitle1"
                                underline="none"
                                color="indigo.darkest"
                                sx={{
                                    cursor: 'pointer',
                                }}>
                                My Resume
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link
                                underline="none"
                                variant="subtitle1"
                                color="indigo.darkest"
                                sx={{
                                    cursor: 'pointer',
                                }}>
                                Plugs
                            </Link>
                        </MenuItem>
                    </Menu>
                    <IconButton onClick={handleClick}>
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
