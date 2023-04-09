import { Box, Typography, Divider } from '@mui/material';
import * as React from 'react';

const experience = [
    {
        position: 'Senior Web Developer',
        company: 'Cafe24 Philippines',
        date: 'November 2021 - Present',
        roles: [
            'Create development plans for new projects',
            'Manage development tasks',
            'Research for feasibility of the projects functionalities',
            'Create working prototypes',
            'Develop both front and back-end of web apps',
            'Direct communication with the stakeholders of projects',
        ],
    },
    {
        position: 'Web Developer',
        company: 'Cafe24 Philippines',
        date: 'September 2018 - November 2021',
        roles: [
            'Develop web apps for e-commerce appstore based on specs',
            "Code review/cross test co-developer's work",
            'Coordinate with PM, senior developers and stakeholders',
            'Troubleshoot and resolve bugs',
        ],
    },
    {
        position: 'Equipment Maintenance Technician',
        company: 'Analog Devices',
        date: 'May 2017 - April 2018',
        roles: [
            'Maintain test machine functionality',
            'Monitor status of test machines if working 24/7',
            'Assist operator with testing setup',
        ],
    },
];

function Experience() {
    return (
        <Box
            sx={(theme) => ({
                padding: '3em',
                position: 'relative',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                maxHeight: '100em',
                [theme.breakpoints.up('lg')]: {
                    height: '100vh',
                    scrollSnapAlign: 'center',
                },
            })}>
            <Box component="div">
                <Box
                    display="flex"
                    justifyContent="center">
                    <Typography
                        variant="h2"
                        color="success.main"
                        fontWeight="800"
                        textAlign="center">
                        Work Experience
                    </Typography>
                </Box>
                <Box
                    sx={(theme) => ({
                        margin: '3em',
                        marginBottom: '0',
                        paddingX: '5em',
                        [theme.breakpoints.down('md')]: {
                            paddingX: '0',
                            margin: '0',
                        },

                        [theme.breakpoints.up('xxl')]: {
                            display: 'flex',
                            justifyContent: 'center',
                        },
                    })}>
                    {experience.map((item, index) => {
                        return (
                            <Box
                                key={`${item.position} ${item.company}`}
                                width="30em"
                                sx={(theme) => ({
                                    marginY: '1em',
                                    marginLeft: `${
                                        index * (100 / experience.length)
                                    }%`,
                                    [theme.breakpoints.down('md')]: {
                                        marginX: '3em',
                                        width: 'auto',
                                    },
                                    [theme.breakpoints.up('xxl')]: {
                                        marginX: '2em',
                                        width: 'auto',
                                    },
                                })}>
                                <Typography
                                    color="success.main"
                                    variant="caption">
                                    {item.date}
                                </Typography>
                                <Typography
                                    color="success.main"
                                    variant="subtitle2">
                                    {item.company}
                                </Typography>
                                <Typography
                                    color="success.main"
                                    variant="h5">
                                    {item.position}
                                </Typography>
                                {item.roles.map((role) => (
                                    <Typography
                                        key={`${item.position} ${role}`}
                                        paddingLeft="1em"
                                        letterSpacing="0.07em"
                                        color="success.dark"
                                        variant="body2">
                                        &#x2022; {role}
                                    </Typography>
                                ))}
                                <br />
                                {index !== experience.length - 1 && (
                                    <Divider
                                        sx={{
                                            borderColor: 'success.light',
                                            display: { xxl: 'none' },
                                        }}
                                    />
                                )}
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
}

export default Experience;
