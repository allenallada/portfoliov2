import {
    Box,
    IconButton,
    Stack,
    Drawer,
    List,
    ListItem,
    Divider,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import WalletIcon from '@mui/icons-material/Wallet';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PowerIcon from '@mui/icons-material/Power';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const socials = [
    'https://www.linkedin.com/in/allen-allada-ab5131166/',
    'https://www.youtube.com/channel/UCog4v5YQ5ZXoCKnM-buG5mQ',
    'https://github.com/allenallada',
    'https://www.facebook.com/allen.allada/',
];

const otherLinks = [
    {
        to: '/projects',
        icon: <WalletIcon />,
        text: 'Personal Projects',
    },
    {
        to: '/resume',
        icon: <ContactPageIcon />,
        text: 'My Resume',
    },
    {
        to: '/plugs',
        icon: <PowerIcon />,
        text: 'Plugs',
    },
];

function TopNav() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const [anchor, setAnchor] = React.useState(matches ? 'right' : 'top');

    const handleResize = () => {
        setAnchor(matches ? 'right' : 'top');
    };

    window.addEventListener('resize', handleResize);

    return (
        <Box
            component="header"
            sx={(theme) => ({
                position: 'fixed',
                top: 0,
                maxHeight: '12rem',
                padding: '3em',
                background: 'transparent',
                width: '100%',
                scrollSnapAlign: 'center',
                zIndex: '100',
                [theme.breakpoints.down('sm')]: {
                    padding: '2em',
                },
            })}>
            <Stack
                alignItems="center"
                direction="row"
                spacing={2}
                justifyContent="space-between">
                {/* <Box
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
                    src="\img\green-no-bg.png"></Box> */}
                <Box
                    sx={(theme) => ({
                        width: '5em',
                        height: '5em',
                        [theme.breakpoints.down('md')]: {
                            width: '3em',
                            height: '3em',
                        },
                    })}>
                    <Logo
                        sx={{
                            width: '100%',
                            height: '100%',
                            fill: 'white',
                        }}
                    />
                </Box>
                <Box>
                    <IconButton onClick={() => setOpen(!open)}>
                        <MenuIcon
                            sx={(theme) => ({
                                color: 'indigo.darkest',
                                fontSize: '1.5em',
                                [theme.breakpoints.down('md')]: {
                                    color: 'template.primary',
                                    fontSize: '1em',
                                },
                            })}
                        />
                    </IconButton>
                </Box>
            </Stack>
            <Drawer
                anchor={anchor}
                PaperProps={{
                    sx: {
                        backgroundColor: 'common.white',
                        width: matches ? 300 : 'auto',
                    },
                }}
                open={open}
                onClose={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}>
                <Box
                    sx={{
                        backgroundColor: 'common.white',
                        color: 'indigo.dark',
                    }}
                    role="presentation">
                    <List>
                        {otherLinks.map((link) => (
                            <Link
                                key={link.text}
                                to="/resume">
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon
                                            sx={{
                                                color: 'inherit',
                                            }}>
                                            {/* <WalletIcon /> */}
                                            {link.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            variant="body1"
                                            color="inherit"
                                            underline="none">
                                            {link.text}
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Divider
                        sx={{
                            borderColor: 'indigo.main',
                        }}
                    />
                    <List>
                        <ListItem
                            key="mailto"
                            disablePadding>
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
                        <ListItem
                            key="discord"
                            disablePadding>
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
                        {socials.map((link, index) => (
                            <Box
                                key={`link-${index}`}
                                marginX="1.5em">
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
        </Box>
    );
}

export default TopNav;
