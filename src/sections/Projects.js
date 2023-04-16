import {
    Box,
    Card,
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
        name: 'Base Japan Product Transfer',
        image: 'https://file.cafe24cos.com/product-transfer/basejp/images/promotional/JP-App-detail.jpg',
        desc: 'An app used to migrate products from the Base Japan store, uploads the file exported from Base Japan, reads and uploads the file to Cafe24',
        tags: [
            {
                text: 'Javascript',
                color: 'warning',
                fill: true,
            },
            {
                text: 'Vue',
                color: 'success',
                fill: true,
            },
            {
                text: 'Laravel',
                color: 'error',
                fill: true,
            },
            {
                text: 'PHP',
                color: 'primary',
                fill: true,
            },
            {
                text: 'MySQL',
                color: 'warning',
                fill: true,
            },
            {
                text: 'Lead Developer',
                color: 'error',
            },
            {
                text: 'Maintainer',
                color: 'success',
            },
        ],
    },
    {
        name: 'Purchasing Pattern Display',
        image: 'https://file.cafe24cos.com/purchasing-pattern/images/promotional/purchasing_pattern_en.png',
        desc: 'An app that analyzes the purchases for a Product based on options and shows in a graphical way',
        tags: [
            {
                text: 'Javascript',
                color: 'warning',
                fill: true,
            },
            {
                text: 'Laravel',
                color: 'error',
                fill: true,
            },
            {
                text: 'PHP',
                color: 'primary',
                fill: true,
            },
            {
                text: 'Redis',
                color: 'error',
                fill: true,
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
        name: 'Makeshop Product Transfer',
        image: 'https://file.cafe24cos.com/product-transfer/makeshop/images/promotional/KR-App-detail.jpg',
        desc: 'An app used to migrate products from the Makeshop store, uploads the file exported from Makeshop, reads and uploads the file to Cafe24',
        tags: [
            {
                text: 'Javascript',
                color: 'warning',
                fill: true,
            },
            {
                text: 'Vue',
                color: 'success',
                fill: true,
            },
            {
                text: 'Laravel',
                color: 'error',
                fill: true,
            },
            {
                text: 'PHP',
                color: 'primary',
                fill: true,
            },
            {
                text: 'MySQL',
                color: 'warning',
                fill: true,
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
        tags: [
            {
                text: 'Javascript',
                color: 'warning',
                fill: true,
            },
            {
                text: 'Vue',
                color: 'success',
                fill: true,
            },
            {
                text: 'Laravel',
                color: 'error',
                fill: true,
            },
            {
                text: 'PHP',
                color: 'primary',
                fill: true,
            },
            {
                text: 'MySQL',
                color: 'warning',
                fill: true,
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
];

function Projects() {
    return (
        <Box
            sx={(theme) => ({
                padding: '3em',
                backgroundColor: 'indigo.darkest',
                position: 'relative',
                width: '100%',
                height: 'auto',
                [theme.breakpoints.up('lg')]: {
                    height: '100vh',
                    scrollSnapAlign: 'center',
                },
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            })}>
            <Box>
                <Typography
                    variant="h4"
                    color="success.main"
                    fontWeight="800"
                    textAlign="center">
                    Projects
                </Typography>
                <Typography
                    variant="body2"
                    color="common.white"
                    textAlign="center">
                    I have contributed to various projects, but I've listed the
                    ones where I have a signicant role.
                </Typography>
            </Box>
            <Box
                sx={(theme) => ({
                    padding: '3em',
                    [theme.breakpoints.down('md')]: {
                        padding: '0',
                    },
                })}>
                <Grid
                    container
                    spacing={5}
                    rowSpacing={2}
                    columns={12}
                    marginTop="1em"
                    justifyContent="center"
                    alignContent="center">
                    {projects.map((project) => {
                        return (
                            <Grid
                                key={project.name}
                                xxl={3}
                                xl={2.5}
                                lg={2.7}
                                sm={4.5}
                                xs={10}>
                                <Box
                                    display="flex"
                                    height="100%"
                                    width="100%"
                                    justifyContent="center">
                                    <Card
                                        width="100%"
                                        sx={{
                                            marginX: 'auto',
                                            cursor: 'pointer',
                                        }}
                                        onClick={(event) =>
                                            window.open(project.image)
                                        }>
                                        <CardMedia
                                            component="img"
                                            image={project.image}
                                            alt={project.name}
                                            sx={{
                                                objectFit: 'cover',
                                                objectPosition: 'top',
                                                height: {
                                                    xxl: '10vw',
                                                    xl: '12vw',
                                                    lg: '18vw',
                                                    md: '13vw',
                                                    sm: '15vw',
                                                    xs: '25vw',
                                                },
                                            }}
                                        />
                                        <CardContent
                                            sx={{
                                                padding: '1em',
                                                color: 'indigo.dark',
                                            }}>
                                            <Typography variant="h6">
                                                {project.name}
                                            </Typography>
                                            <Typography variant="body2">
                                                {project.desc}
                                            </Typography>
                                        </CardContent>
                                        <CardActions
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                justifyContent: 'center',
                                            }}>
                                            {project.tags.map((tag) => {
                                                return (
                                                    <Chip
                                                        variant={
                                                            tag.fill
                                                                ? 'filled'
                                                                : 'outlined'
                                                        }
                                                        key={`${project.name} ${tag.text}`}
                                                        sx={{
                                                            fontSize: '0.6em',
                                                            height: '3em',
                                                            padding: '0.05em',
                                                            marginY: '0.5em',
                                                        }}
                                                        label={tag.text}
                                                        color={tag.color}
                                                    />
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
        </Box>
    );
}

export default Projects;
