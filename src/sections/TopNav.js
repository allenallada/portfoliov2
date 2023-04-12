import {
    Box,
    IconButton,
    Stack,
    Drawer,
    List,
    ListItem,
    Link,
    Divider,
    ListItemButton,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import WalletIcon from '@mui/icons-material/Wallet';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PowerIcon from '@mui/icons-material/Power';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import { SocialIcon } from 'react-social-icons';

const socials = [
    'https://www.linkedin.com/in/allen-allada-ab5131166/',
    'https://www.youtube.com/channel/UCog4v5YQ5ZXoCKnM-buG5mQ',
    'https://github.com/allenallada',
    'https://www.facebook.com/allen.allada/',
];

function TopNav() {
    const [open, setOpen] = React.useState(false);

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
            <Drawer
                anchor="right"
                PaperProps={{
                    sx: {
                        backgroundColor: 'common.white',
                        width: 400,
                    },
                }}
                slotProps={{
                    backdrop: {
                        sx: {
                            background: 'transparent',
                        },
                    },
                }}
                open={open}
                onClose={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}>
                <Box
                    sx={{
                        backgroundColor: 'common.white',
                        width: 400,
                        color: 'indigo.darkest',
                    }}
                    role="presentation">
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon
                                    sx={{
                                        color: 'inherit',
                                    }}>
                                    <WalletIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Link
                                        variant="body1"
                                        color="inherit"
                                        underline="none">
                                        Personal Projects
                                    </Link>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon
                                    sx={{
                                        color: 'inherit',
                                    }}>
                                    <ContactPageIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Link
                                        variant="body1"
                                        color="inherit"
                                        underline="none">
                                        My Resume
                                    </Link>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon
                                    sx={{
                                        color: 'inherit',
                                    }}>
                                    <PowerIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Link
                                        variant="body1"
                                        color="inherit"
                                        underline="none">
                                        Plugs
                                    </Link>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider
                        sx={{
                            borderColor: 'indigo.main',
                        }}
                    />
                    <List>
                        <ListItem>
                            <ListItemButton
                                onClick={() =>
                                    (window.location =
                                        'mailto:allenallada58@gmail.com')
                                }>
                                <ListItemIcon
                                    sx={{
                                        color: 'inherit',
                                    }}>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Link
                                        variant="body1"
                                        letterSpacing="0.1em"
                                        marginBottom="1em"
                                        color="inherit"
                                        underline="none">
                                        Send me an email
                                    </Link>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton
                                onClick={() =>
                                    window.open(
                                        'https://discord.com/users/165714344015953921',
                                        '_blank'
                                    )
                                }>
                                <ListItemIcon
                                    sx={{
                                        color: 'inherit',
                                    }}>
                                    <ChatIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Link
                                        variant="body1"
                                        letterSpacing="0.1em"
                                        marginBottom="1em"
                                        color="inherit"
                                        underline="none">
                                        Message me on Discord
                                    </Link>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider
                        sx={{
                            borderColor: 'indigo.main',
                        }}
                    />
                    <Box
                        display="flex"
                        justifyContent="center"
                        paddingY="16px"
                        paddingX="32px">
                        {socials.map((link) => (
                            <Box marginX="1.5em">
                                <SocialIcon
                                    bgColor="#4338CA"
                                    style={{ height: '2em', width: '2em' }}
                                    url={link}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Drawer>
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
                    <IconButton onClick={() => setOpen(!open)}>
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
