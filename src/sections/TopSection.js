import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';

function TopSection() {
    return (
        <Box
            sx={{
                background: (theme) => {
                    console.log(theme.palette);
                    return `linear-gradient(90deg, ${theme.palette.indigo.darkest} 67%, ${theme.palette.success.light} 33%)`;
                },
            }}>
            <Box
                sx={{
                    fontSize: '1vw',
                    paddingBottom: '5em',
                }}>
                <Box
                    sx={{
                        color: 'common.white',
                        paddingTop: '10em',
                    }}
                    display="flex"
                    justifyContent="space-around">
                    <Box marginLeft="3em">
                        <Typography
                            variant="h5"
                            width="32vw"
                            display="block"
                            marginBottom="0.5em"
                            marginTop="3em">
                            Hi! I'm Allen
                        </Typography>
                        <Typography
                            variant="h1"
                            color="success.light"
                            width="32vw"
                            fontWeight="800"
                            letterSpacing="-0.05em">
                            Full Stack <br />
                            Web Developer.
                        </Typography>
                        <Typography
                            variant="body1"
                            width="32vw"
                            display="block"
                            marginTop="1em">
                            Self-taught developer currently working as a{' '}
                            <strong>Senior Web Developer</strong>, able to craft
                            scaleable frontend and backend products using
                            different Web Development technologies.
                        </Typography>
                        <Stack
                            alignItems="center"
                            direction="row"
                            justifyContent="space-between"
                            marginTop="3em">
                            <Typography
                                variant="body2"
                                width="12vw"
                                display="block">
                                Skilled using <strong>PHP</strong>,
                                <strong>Laravel</strong> and
                                <nobr>front-end</nobr> libraries such as
                                <strong> React, Vue.js</strong> and more.
                            </Typography>
                            <Typography
                                variant="body2"
                                display="block"
                                width="12vw">
                                Proven experience building products for a
                                leading <nobr>e-commerce</nobr> company in
                                Korea.
                            </Typography>
                        </Stack>
                    </Box>
                    <Box
                        component="img"
                        sx={{
                            width: '20em',
                            height: '20em',
                        }}
                        alt="hey handsome"
                        src="\img\avatar-main.jpg"
                    />
                    <Box></Box>
                </Box>
            </Box>
        </Box>
    );
}

export default TopSection;
