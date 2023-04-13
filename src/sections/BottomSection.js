import * as React from 'react';
import { Box, Typography, Divider, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const socials = [
    'https://www.linkedin.com/in/allen-allada-ab5131166/',
    'https://www.youtube.com/channel/UCog4v5YQ5ZXoCKnM-buG5mQ',
    'https://github.com/allenallada',
    'https://www.facebook.com/allen.allada/',
];

export default function BottomSection() {
    const navigate = useNavigate();

    return (
        <Box
            sx={(theme) => ({
                padding: '3em',
                position: 'relative',
                width: '100%',
                [theme.breakpoints.up('lg')]: {
                    height: '100vh',
                    scrollSnapAlign: 'center',
                },
                backgroundColor: 'indigo.darkest',
            })}>
            <Box
                sx={(theme) => ({
                    height: '100%',
                    paddingX: {
                        md: '15em',
                        sm: '5em',
                        xs: '2em',
                    },
                    justifyContent: 'center',
                    display: 'flex',
                })}>
                <Box
                    component="div"
                    height="100%"
                    sx={{
                        paddingX: {
                            md: '15em',
                            sm: '5em',
                            xs: '2em',
                        },
                        maxWidth: '1900px',
                    }}>
                    <Box
                        sx={(theme) => ({
                            height: '60%',
                            display: 'flex',
                            justifyContent: 'start',
                            alignContent: 'center',
                            [theme.breakpoints.down('sm')]: {
                                flexDirection: 'column',
                            },
                        })}>
                        <Box
                            sx={(theme) => ({
                                width: '30em',
                                [theme.breakpoints.down('md')]: {
                                    width: '25em',
                                },
                            })}
                            height="100%"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center">
                            <Typography
                                fontSize="1.5em"
                                letterSpacing="0.2em"
                                variant="overline"
                                color="success.main">
                                Say Hello
                            </Typography>
                            <Link
                                variant="h6"
                                letterSpacing="0.1em"
                                marginBottom="1em"
                                color="common.white"
                                underline="hover"
                                sx={{
                                    cursor: 'pointer',
                                }}
                                onClick={() =>
                                    (window.location =
                                        'mailto:allenallada58@gmail.com')
                                }>
                                allenallada58@gmail.com
                            </Link>
                            <Link
                                variant="h6"
                                letterSpacing="0.1em"
                                marginBottom="1em"
                                color="common.white"
                                underline="hover"
                                sx={{
                                    cursor: 'pointer',
                                }}
                                onClick={() =>
                                    window.open(
                                        'https://discord.com/users/165714344015953921',
                                        '_blank'
                                    )
                                }>
                                discord.com/user
                            </Link>
                        </Box>
                        <Box
                            sx={(theme) => ({
                                width: '30em',
                                [theme.breakpoints.down('md')]: {
                                    width: '25em',
                                },
                            })}
                            height="100%"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center">
                            <Typography
                                marginTop={{
                                    lg: '2.2em',
                                }}
                                fontSize="1.5em"
                                letterSpacing="0.2em"
                                variant="overline"
                                color="success.main">
                                Others
                            </Typography>
                            <Link
                                variant="h6"
                                letterSpacing="0.1em"
                                marginBottom="1em"
                                color="common.white"
                                underline="hover"
                                onClick={() => navigate('/projects')}
                                sx={{
                                    cursor: 'pointer',
                                }}>
                                Personal Projects
                            </Link>
                            <Link
                                variant="h6"
                                letterSpacing="0.1em"
                                marginBottom="1em"
                                color="common.white"
                                underline="hover"
                                onClick={() => navigate('/resume')}
                                sx={{
                                    cursor: 'pointer',
                                }}>
                                My Resume
                            </Link>
                            <Link
                                variant="h6"
                                letterSpacing="0.1em"
                                marginBottom="1em"
                                color="common.white"
                                underline="hover"
                                onClick={() => navigate('/plugs')}
                                sx={{
                                    cursor: 'pointer',
                                }}>
                                Plugs
                            </Link>
                        </Box>
                    </Box>
                    <Divider />
                    <Box
                        sx={(theme) => ({
                            display: 'flex',
                            justifyContent: 'end',
                            alignContent: 'center',
                            paddingY: '1em',
                        })}>
                        <Typography
                            variant="h6"
                            lineHeight="2em"
                            letterSpacing="0.08em"
                            color="common.white"
                            marginRight="auto">
                            &#169; Allen Allada 2023
                        </Typography>
                        {socials.map((link) => (
                            <Box marginX="0.5em">
                                <SocialIcon
                                    bgColor="white"
                                    style={{ height: '2em', width: '2em' }}
                                    url={link}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
