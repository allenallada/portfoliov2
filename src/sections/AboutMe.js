import React, { useEffect, useState } from 'react';
import { Box, Typography, Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const paragraphs = [
    "I'm Allen Allada, a full stack web developer based in the Philippines, and I am delighted to welcome you to my portfolio.",
    'I started my journey in programming when I was asked to help with a thesis project. I quickly fell in love with programming and the technologies behind it and after that, I decided to shift my career from a technician to a web developer.',
    'To hone my skills and knowledge, I have taken various courses from Udemy and other sources to learn web development. It was a challenging journey, but I enjoyed learning new things and exploring the possibilities of web development. In September 2018, I landed my first job as a web developer at Cafe24 Philippines, and I have been working there ever since.',
    'I am passionate about web development and strive to create innovative and user-friendly web applications. I take pride in my work and believe in continuously improving my skills to deliver the best possible results to our  clients.',
    'In my free time, I enjoy playing games with my buddies, the N in my logo stands for Nutree,  my in-game name.',
];

export default function AboutMe({ animate }) {
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
                overflow: 'hidden',
                width: '100%',
                [theme.breakpoints.up('lg')]: {
                    height: '100vh',
                    scrollSnapAlign: 'center',
                },
                backgroundColor: 'success.main',
            })}>
            <Box
                ref={ref}
                component="div"
                display="flex"
                justifyContent="center">
                <Box
                    sx={(theme) => ({
                        maxWidth: '1920px',
                        display: 'flex',
                        justifyContent: 'center',
                        [theme.breakpoints.down('md')]: {
                            flexDirection: 'column-reverse',
                        },
                    })}>
                    <Box
                        sx={(theme) => ({
                            width: '50%',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            display: 'flex',
                            marginLeft: '6em',
                            [theme.breakpoints.down('md')]: {
                                backgroundColor: 'success.main',
                                width: '100%',
                                marginLeft: '0',
                                flexDirection: 'row',
                            },
                        })}>
                        <Slide
                            direction="up"
                            in={visible}
                            timeout={{
                                enter: 300,
                                exit: 100,
                            }}>
                            <Box
                                component="img"
                                sx={(theme) => ({
                                    width: '25em',
                                    height: '25em',
                                    margin: 'auto',
                                    [theme.breakpoints.down('md')]: {
                                        marginY: '2em',
                                        width: '23em',
                                        height: '23em',
                                    },
                                })}
                                alt="hey handsome"
                                src="\img\about-me.jpg"
                            />
                        </Slide>
                    </Box>
                    <Box
                        sx={{
                            paddingX: {
                                lg: '15em',
                                md: '15em',
                                sm: '5em',
                                xs: '2em',
                            },
                            height: {
                                lg: '80vh',
                                md: 'auto',
                            },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                        color="common.white">
                        <Slide
                            timeout={{
                                enter: 300,
                                exit: 0,
                            }}
                            direction="down"
                            in={visible}>
                            <Typography
                                variant="h4"
                                color="indigo.dark"
                                fontWeight="800"
                                textAlign="center"
                                marginBottom="1em">
                                Hey there.
                            </Typography>
                        </Slide>
                        <Box overflow="hidden">
                            {paragraphs.map((paragraph, index) => (
                                <Slide
                                    direction="up"
                                    in={visible}
                                    timeout={{
                                        enter: index * 100 + 300,
                                        exit: 100,
                                    }}>
                                    <Typography
                                        key={`about-me-${index}`}
                                        marginBottom="1em"
                                        variant="body1"
                                        fontWeight="600"
                                        letterSpacing="-0.03em">
                                        {paragraph}
                                    </Typography>
                                </Slide>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
