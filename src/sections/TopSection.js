import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import * as React from 'react';
import AvatarShapes from '../components/AvatarShapes';
import { useTheme } from '@mui/material/styles';

function TopSection() {
    const myTheme = useTheme();
    const isMatch = useMediaQuery(myTheme.breakpoints.down('md'));

    return (
        <Box
            sx={(theme) => ({
                position: 'relative',
                width: '100%',
                maxHeight: '100em',
                [theme.breakpoints.up('lg')]: {
                    height: '100vh',
                    scrollSnapAlign: 'center',
                },
                backgroundColor: 'common.white',
            })}>
            <Box
                sx={(theme) => ({
                    background: `linear-gradient(90deg, ${theme.palette.indigo.darkest} 75%, ${theme.palette.success.light} 25%)`,
                    [theme.breakpoints.down('md')]: {
                        background: theme.palette.indigo.darkest,
                    },
                })}>
                <Box
                    sx={(theme) => ({
                        color: 'common.white',
                        paddingTop: '10em',
                        display: 'flex',
                        justifyContent: 'center',
                        [theme.breakpoints.down('md')]: {
                            flexDirection: 'column',
                            background: 'common.white',
                            paddingTop: '5em',
                        },
                    })}>
                    <Box
                        sx={(theme) => ({
                            width: '40%',
                            marginLeft: 'auto',
                            [theme.breakpoints.down('md')]: {
                                width: 'auto',
                                marginX: '5.3em',
                            },
                        })}>
                        <Box>
                            <Typography
                                variant="h5"
                                sx={(theme) => ({
                                    width: '32vw',
                                    marginBottom: '0.5em',
                                    marginTop: '3em',
                                    [theme.breakpoints.down('md')]: {
                                        width: '100%',
                                    },
                                })}>
                                Hi! I'm Allen,
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={(theme) => ({
                                    width: '32vw',
                                    marginBottom: '0.5em',
                                    [theme.breakpoints.down('md')]: {
                                        width: '100%',
                                    },
                                })}
                                color="success.light"
                                fontWeight="800"
                                letterSpacing="-0.05em">
                                Full Stack <br />
                                Web Developer.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={(theme) => ({
                                    width: '32vw',
                                    marginBottom: '0.5em',
                                    marginTop: '1em',
                                    [theme.breakpoints.down('md')]: {
                                        width: '80%',
                                    },
                                })}>
                                Self-taught developer currently working as a{' '}
                                <strong>Senior Web Developer</strong>, able to
                                craft scaleable frontend and backend products
                                using different Web Development technologies.
                            </Typography>
                            <Stack
                                alignItems="center"
                                direction="row"
                                marginTop="3em"
                                marginBottom="3em"
                                sx={(theme) => ({
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginTop: '3em',
                                    [theme.breakpoints.down('md')]: {
                                        marginBottom: '3em',
                                        width: '80%',
                                    },
                                })}>
                                <Typography
                                    marginTop="0"
                                    variant="body2"
                                    width="13vw"
                                    sx={(theme) => ({
                                        [theme.breakpoints.down('md')]: {
                                            width: '40%',
                                        },
                                    })}>
                                    Skilled using <strong>PHP</strong>,
                                    <strong>Laravel</strong> and
                                    <nobr> front-end</nobr> libraries such as
                                    <strong> React, Vue.js</strong>.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    width="13vw"
                                    sx={(theme) => ({
                                        [theme.breakpoints.down('md')]: {
                                            width: '40%',
                                        },
                                    })}>
                                    Proven experience building products for a
                                    leading <nobr>e-commerce</nobr> company
                                    based in Korea.
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                    <Box
                        justifyContent="center"
                        display="flex"
                        sx={(theme) => ({
                            width: '50%',
                            [theme.breakpoints.down('md')]: {
                                backgroundColor: 'success.main',
                                width: '100%',
                                height: '30em',
                            },
                        })}>
                        <Box
                            sx={(theme) => ({
                                [theme.breakpoints.down('md')]: {
                                    position: 'relative',
                                },
                            })}>
                            <Box
                                zIndex="10"
                                marginX="auto"
                                component="img"
                                sx={(theme) => ({
                                    position: 'relative',
                                    width: '20em',
                                    height: '20em',
                                    boxShadow: `10px 10px ${theme.palette.neutral[400]}`,
                                    [theme.breakpoints.down('md')]: {
                                        marginY: '5em',
                                        width: '224px',
                                        height: '224px',
                                    },
                                })}
                                alt="hey handsome"
                                src="\img\avatar-main.jpg"
                            />
                            <AvatarShapes
                                className={isMatch ? 'avatar-shape' : ''}
                                htmlColor="red"
                                sx={(theme) => ({
                                    fontSize: '1em',
                                    position: 'absolute',
                                    width: '35em',
                                    height: '35em',
                                    top: '2em',
                                    right: '8em',
                                    [theme.breakpoints.down('md')]: {
                                        top: '-1em',
                                        right: '-7em',
                                        width: '35em',
                                        height: '35em',
                                    },
                                })}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default TopSection;
