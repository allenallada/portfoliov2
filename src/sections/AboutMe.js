import * as React from 'react';
import { Box, Typography } from '@mui/material';

const paragraphs = [
    "I'm Allen Allada, a full stack web developer based in the Philippines, and I am delighted to welcome you to my portfolio.",
    'I started my journey in programming when I was asked to help with a thesis project. I quickly fell in love with programming and the technologies behind it and after that, I decided to shift my career from a technician to a web developer.',
    'To hone my skills and knowledge, I have taken various courses from Udemy and other sources to learn web development. It was a challenging journey, but I enjoyed learning new things and exploring the possibilities of web development. In September 2018, I landed my first job as a web developer at Cafe24 Philippines, and I have been working there ever since.',
    'I am passionate about web development and strive to create innovative and user-friendly web applications. I take pride in my work and believe in continuously improving my skills to deliver the best possible results to my clients.',
    'In my free time, I enjoy playing games with my buddies, my in-game name is Nutree, which is the inspiration behind the N in my logo.',
];

export default function AboutMe() {
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
                backgroundColor: 'success.main',
            })}>
            <Box component="div">
                <Box
                    sx={(theme) => ({
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
                        <Box
                            component="img"
                            sx={(theme) => ({
                                width: '25em',
                                height: '25em',
                                [theme.breakpoints.down('md')]: {
                                    marginY: '2em',
                                    width: '23em',
                                    height: '23em',
                                },
                            })}
                            alt="hey handsome"
                            src="\img\about-me.jpg"
                        />
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
                        <Typography
                            variant="h2"
                            color="indigo.dark"
                            fontWeight="800"
                            textAlign="center"
                            marginBottom="1em">
                            Hey there.
                        </Typography>
                        {paragraphs.map((paragraph, index) => (
                            <Typography
                                key={`about-me-${index}`}
                                marginBottom="1em"
                                variant="body1"
                                fontWeight="600"
                                letterSpacing="-0.03em">
                                {paragraph}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
