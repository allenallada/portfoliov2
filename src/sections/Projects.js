import {
    Box,
    Card,
    CardHeader,
    Typography,
    CardContent,
    CardMedia,
    CardActions,
    Chip,
    Unstable_Grid2 as Grid,
} from '@mui/material';
import * as React from 'react';

const projects = [
    {
        name: 'Purchasing Pattern Display',
        image: 'https://file.cafe24cos.com/purchasing-pattern/images/promotional/purchasing_pattern_en.png',
        desc: 'An app that analyzes the purchases for a Product based on options and shows in a graphical way',
        role: [
            {
                text: 'Developer',
                color: 'primary',
            },
            {
                text: 'Maintainer',
                color: 'success',
            },
        ],
    },
    {
        name: 'Makeshop Product Transfer',
        image: 'https://file.cafe24cos.com/product-transfer/makeshop/images/promotional/KR-App-detail.jpg',
        desc: 'An app used to migrate products from the Makeshop store, uploads the file exported from Makeshop, reads and uploads the file to Cafe24',
        role: [
            {
                text: 'Developer',
                color: 'primary',
            },
            {
                text: 'Maintainer',
                color: 'success',
            },
        ],
    },
    {
        name: 'Base Japan Product Transfer',
        image: 'https://file.cafe24cos.com/product-transfer/basejp/images/promotional/JP-App-detail.jpg',
        desc: 'An app used to migrate products from the Base Japan store, uploads the file exported from Base Japan, reads and uploads the file to Cafe24',
        role: [
            {
                text: 'Lead Developer',
                color: 'error',
            },
            {
                text: 'Developer',
                color: 'primary',
            },
            {
                text: 'Maintainer',
                color: 'success',
            },
        ],
    },
    {
        name: 'Internal Company Employee Tool',
        image: 'img/employee_tool.png',
        desc: 'App that monitors the attendance, computes leaves and other employee tools. Internal so no further information could be given',
        role: [
            {
                text: 'Developer',
                color: 'primary',
            },
            {
                text: 'Maintainer',
                color: 'success',
            },
        ],
    },
];

function Projects() {
    return (
        <Box
            sx={{
                fontSize: '1vw',
                padding: '3em',
                backgroundColor: 'indigo.dark',
            }}>
            <Box
                display="flex"
                justifyContent="center">
                <Typography
                    variant="h2"
                    marginTop="1em"
                    color="common.white"
                    fontWeight="800">
                    Projects
                </Typography>
            </Box>
            <Grid
                container
                spacing={10}
                padding="5em">
                {projects.map((project) => {
                    return (
                        <Grid
                            lg={6}
                            xs={12}>
                            <Box
                                display="flex"
                                justifyContent="center">
                                <Card
                                    sx={{
                                        marginX: 'auto',
                                        width: {
                                            lg: '90%',
                                            md: '60%',
                                            xs: '80%',
                                        },
                                        cursor: 'pointer',
                                    }}
                                    onClick={(event) =>
                                        window.open(project.image)
                                    }>
                                    <CardHeader
                                        sx={{
                                            textAlign: 'center',
                                            padding: '0.5em',
                                            color: 'indigo.dark',
                                        }}
                                        component="h2"
                                        title={project.name}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="200em"
                                        image={project.image}
                                        alt={project.name}
                                        sx={{
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            padding: '1em',
                                            color: 'indigo.darkest',
                                        }}>
                                        <Typography>{project.desc}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        {project.role.map((role) => {
                                            return (
                                                <Chip
                                                    label={role.text}
                                                    color={role.color}
                                                />
                                                // <Typography variant="body2">
                                                //
                                                // </Typography>
                                            );
                                        })}
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default Projects;
