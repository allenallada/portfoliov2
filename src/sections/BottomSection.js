import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, Link, Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { useInView } from 'react-intersection-observer';

const socials = [
    'https://www.linkedin.com/in/allen-allada-ab5131166/',
    'https://www.youtube.com/channel/UCog4v5YQ5ZXoCKnM-buG5mQ',
    'https://github.com/allenallada',
    'https://www.facebook.com/allen.allada/',
];

export default function BottomSection({ animate }) {
    const navigate = useNavigate();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    });

    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        setVisibility(animate === false ? true : inView);
    }, [inView, animate]);

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
                ref={ref}
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
                <Slide
                    direction="up"
                    in={visible}>
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
                                key="left-column"
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
                                key="right-column"
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
                                    key="projects"
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
                                    key="resume"
                                    variant="h6"
                                    letterSpacing="0.1em"
                                    marginBottom="1em"
                                    color="common.white"
                                    underline="hover"
                                    onClick={() => navigate('/re sume')}
                                    sx={{
                                        cursor: 'pointer',
                                    }}>
                                    My Resume
                                </Link>
                                <Link
                                    key="plugs"
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
                            {socials.map((link, index) => (
                                <Box
                                    key={`socials-${index}`}
                                    marginX="0.5em">
                                    <SocialIcon
                                        bgColor="white"
                                        style={{ height: '2em', width: '2em' }}
                                        url={link}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Slide>
            </Box>
        </Box>
    );
}
