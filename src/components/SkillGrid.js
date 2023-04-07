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
                    marginY="1em"
                    fontWeight="800">
                    {title}
                </Typography>
            </Box>
            <Grid
                container
                spacing={2}
                rowSpacing={8}
                justifyContent="center"
                marginX="5em">
                {items.map((item) => (
                    <Grid
                        xs={6}
                        sm={4}
                        lg={3}
                        paddingX="4.5em">
                        <Container>
                            <CircularProgressbarWithChildren
                                value={item.value * 10}
                                strokeWidth={13}
                                styles={buildStyles({
                                    textSize: '0.4em',
                                    pathColor: '#10B981',
                                    textColor: '#10B981',
                                })}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: '30%',
                                    }}
                                    alt={item.text}
                                    src={item.icon}
                                />
                                <strong>{item.text}</strong>
                            </CircularProgressbarWithChildren>
                        </Container>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default SkillGrid;
