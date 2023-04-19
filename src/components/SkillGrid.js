import {
    Box,
    Container,
    Unstable_Grid2 as Grid,
    Typography,
    Slide,
    Zoom,
} from '@mui/material';
import React from 'react';
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SkillGrid({ visible, title, items }) {
    return (
        <>
            <Box overflow="hidden">
                <Slide
                    direction="down"
                    in={visible}
                    timeout={{
                        enter: 300,
                        exit: 100,
                    }}>
                    <Typography
                        sx={(theme) => ({
                            marginBottom: '1em',
                            textAlign: 'center',
                            fontWeight: '800',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '1.1rem',
                            },
                        })}
                        variant="h4">
                        {title}
                    </Typography>
                </Slide>
            </Box>
            <Grid
                container
                rowSpacing={2}
                columns={6}
                justifyContent="center"
                marginBottom="3em">
                {items.map((item, index) => (
                    <Grid
                        key={item.text}
                        xs={2.5}
                        sm={2}
                        md={1.5}
                        lg={1.1}>
                        <Zoom
                            mountOnEnter
                            in={visible}
                            timeout={{
                                enter: 200,
                                exit: 0,
                            }}
                            style={{
                                transitionDelay: `${index * 100 + 300}ms`,
                            }}>
                            <Container
                                sx={{
                                    width: '75%',
                                }}>
                                <CircularProgressbarWithChildren
                                    value={item.value * 10}
                                    strokeWidth={8}
                                    styles={buildStyles({
                                        textSize: '0.4em',
                                        pathColor: '#4338CA',
                                        textColor: '#4338CA',
                                    })}>
                                    <Box
                                        component="img"
                                        sx={(theme) => ({
                                            height: '2.5em',
                                            [theme.breakpoints.down('lg')]: {
                                                height: '4em',
                                            },
                                            [theme.breakpoints.down('md')]: {
                                                height: '4em',
                                            },
                                            [theme.breakpoints.down('sm')]: {
                                                height: '6em',
                                            },
                                        })}
                                        alt={item.text}
                                        src={item.icon}
                                    />
                                    <Typography
                                        sx={(theme) => ({
                                            fontSize: '0.8em',
                                            fontWeight: '600',
                                            [theme.breakpoints.down('xl')]: {
                                                fontSize: '1em',
                                            },
                                            [theme.breakpoints.down('lg')]: {
                                                fontSize: '1.5em',
                                            },
                                            [theme.breakpoints.down('md')]: {
                                                fontSize: '1.8em',
                                            },
                                            [theme.breakpoints.down('sm')]: {
                                                fontSize: '2.5em',
                                            },
                                        })}>
                                        {item.text}
                                    </Typography>
                                </CircularProgressbarWithChildren>
                                <Typography
                                    sx={(theme) => ({
                                        fontSize: '0.8em',
                                        fontWeight: '600',
                                        textAlign: 'center',
                                        [theme.breakpoints.down('lg')]: {
                                            fontSize: '1.6em',
                                        },
                                        [theme.breakpoints.down('md')]: {
                                            fontSize: '1.8em',
                                        },
                                        [theme.breakpoints.down('sm')]: {
                                            fontSize: '2.5em',
                                        },
                                    })}>
                                    {`${item.value}/10`}
                                </Typography>
                            </Container>
                        </Zoom>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default SkillGrid;
