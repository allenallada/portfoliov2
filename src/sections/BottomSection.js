import * as React from 'react';
import { Box, Typography, Divider, Link } from '@mui/material';
import { SocialIcon } from 'react-social-icons';

export default function BottomSection() {
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
                backgroundColor: 'indigo.dark',
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
                        width="30em"
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
                        width="30em"
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
                        padding: '1em',
                    })}>
                    <Typography
                        variant="h6"
                        color="common.white"
                        marginRight="auto">
                        Allen Allada 2023
                    </Typography>
                    <Box marginX="0.5em">
                        <SocialIcon
                            bgColor="white"
                            style={{ height: '2em', width: '2em' }}
                            url="https://www.linkedin.com/in/allen-allada-ab5131166/"
                        />
                    </Box>
                    <Box marginX="0.5em">
                        <SocialIcon
                            bgColor="white"
                            style={{ height: '2em', width: '2em' }}
                            url="https://www.youtube.com/channel/UCog4v5YQ5ZXoCKnM-buG5mQ"
                        />
                    </Box>
                    <Box marginX="0.5em">
                        <SocialIcon
                            bgColor="white"
                            style={{ height: '2em', width: '2em' }}
                            url="https://github.com/allenallada"
                        />
                    </Box>
                    <Box marginX="0.5em">
                        <SocialIcon
                            bgColor="white"
                            style={{ height: '2em', width: '2em' }}
                            url="https://www.facebook.com/allen.allada/"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}