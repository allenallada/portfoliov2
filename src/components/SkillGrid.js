import {
    Box,
    Container,
    Unstable_Grid2 as Grid,
    Typography,
} from '@mui/material';
import * as React from 'react';
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SkillGrid({ title, items }) {
    return (
        <>
            <Box
                display="flex"
                justifyContent="center">
                <Typography
                    variant="h2"
                    marginBottom="1em"
                    textAlign="center"
                    fontWeight="800">
                    {title}
                </Typography>
            </Box>
            <Grid
                container
                rowSpacing={2}
                fontSize="1vw"
                justifyContent="center"
                marginBottom="3em">
                {items.map((item) => (
                    <Grid
                        key={item.text}
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}>
                        <Container
                            sx={{
                                width: '90%',
                            }}>
                            <CircularProgressbarWithChildren
                                value={item.value * 10}
                                strokeWidth={8}
                                styles={buildStyles({
                                    textSize: '0.4em',
                                    pathColor: '#10B981',
                                    textColor: '#10B981',
                                })}>
                                <Box
                                    component="img"
                                    sx={(theme) => ({
                                        height: '2em',
                                        [theme.breakpoints.down('lg')]: {
                                            height: '6em',
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
                                        [theme.breakpoints.down('lg')]: {
                                            fontSize: '1.5em',
                                        },
                                        [theme.breakpoints.down('md')]: {
                                            fontSize: '2em',
                                        },
                                        [theme.breakpoints.down('sm')]: {
                                            fontSize: '3em',
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
                                        fontSize: '2em',
                                    },
                                    [theme.breakpoints.down('md')]: {
                                        fontSize: '2em',
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        fontSize: '3em',
                                    },
                                })}>
                                {`${item.value}/10`}
                            </Typography>
                        </Container>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default SkillGrid;
