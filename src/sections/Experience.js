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
                padding: '10em',
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

                [theme.breakpoints.down('md')]: {
                    padding: '10vw 0',
                },
                [theme.breakpoints.down('sm')]: {
                    padding: '15vw',
                },
            })}>
            <Box
                component="div"
                sx={(theme) => ({
                    padding: '3em',
                    [theme.breakpoints.down('md')]: {
                        padding: '0',
                    },
                })}>
                <Box>
                    <Box
                        display="flex"
                        justifyContent="center">
                        <Typography
                            variant="h4"
                            color="indigo.dark"
                            fontWeight="800"
                            textAlign="center">
                            Work Experience
                        </Typography>
                    </Box>
                    <Box
                        sx={(theme) => ({
                            margin: '4em 2em',
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: 'indigo.lightest',
                            [theme.breakpoints.down('sm')]: {
                                flexDirection: 'column',
                                margin: '2em 0 ',
                            },
                        })}>
                        {experience.map((item, index) => {
                            return (
                                <Box
                                    container
                                    sx={(theme) => ({
                                        width: '100%',
                                        display: 'flex',
                                        borderColor: 'neutral.700',
                                        marginX: 'auto',
                                        [theme.breakpoints.down('sm')]: {
                                            borderTop:
                                                index > 0 &&
                                                index < experience.length
                                                    ? `2px solid ${theme.palette.indigo.dark}`
                                                    : 'none',
                                            flexDirection: 'column',
                                        },
                                        [theme.breakpoints.up('sm')]: {
                                            borderLeft:
                                                index > 0 &&
                                                index < experience.length
                                                    ? `2px solid ${theme.palette.indigo.main}`
                                                    : 'none',
                                        },
                                    })}>
                                    <Box
                                        marginX="auto"
                                        color="indigo.dark"
                                        padding="1.5em"
                                        key={`${item.position} ${item.company}`}>
                                        <Typography variant="caption">
                                            {item.date}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            {item.company}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            paddingY="0.5em">
                                            {item.position}
                                        </Typography>
                                        <Divider />
                                        <br />
                                        {item.roles.map((role) => (
                                            <Typography
                                                key={`${item.position} ${role}`}
                                                paddingLeft="1em"
                                                fontSize="0.75em"
                                                letterSpacing="0.07em"
                                                variant="body2">
                                                &#x2022; {role}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Experience;
