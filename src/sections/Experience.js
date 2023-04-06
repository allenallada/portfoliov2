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
            sx={{
                fontSize: '1vw',
                padding: '3em',
            }}>
            <Box
                display="flex"
                justifyContent="center">
                <Typography
                    variant="h2"
                    marginTop="1em"
                    color="success.main"
                    fontWeight="800">
                    Work Experience
                </Typography>
            </Box>
            <Box
                sx={{
                    margin: '3em',
                    paddingX: '5em',
                }}>
                {/* <Box
                    sx={{
                        position: 'absolute',
                        width: '0.1em',
                        background: (theme) => theme.palette.success.main,
                        left: '18%',
                        height: '50em',
                        marginLeft: '-1px',
                    }}
                /> */}
                {experience.map((item, index) => {
                    // const style =
                    //     index % 2 === 0
                    //         ? { marginRight: 'auto' }
                    //         : { marginLeft: 'auto' };
                    return (
                        <>
                            <Box
                                width="30em"
                                sx={{
                                    marginY: '3em',
                                    marginLeft: `${(index + 1) * 12}em`,
                                }}>
                                <Typography
                                    color="success.main"
                                    variant="body1">
                                    {item.date}
                                </Typography>
                                <Typography
                                    color="success.main"
                                    variant="body1">
                                    {item.company}
                                </Typography>
                                <Typography
                                    color="success.main"
                                    variant="h5">
                                    {item.position}
                                </Typography>
                                <br />
                                {item.roles.map((role) => (
                                    <Typography
                                        letterSpacing="0.07em"
                                        color="success.dark"
                                        variant="body2">
                                        &#x2022; {role}
                                    </Typography>
                                ))}
                                <br />
                                <Divider
                                    sx={{ borderColor: 'success.light' }}
                                />
                            </Box>
                        </>
                    );
                })}
            </Box>
        </Box>
    );
}

export default Experience;
