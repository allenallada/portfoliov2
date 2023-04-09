import { Box, Container } from '@mui/material';
import * as React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import SkillGrid from '../components/SkillGrid';

const skills = [
    {
        value: 8,
        text: 'Javascript',
        icon: 'img/skills/javascript.png',
    },
    {
        value: 7,
        text: 'React/Redux',
        icon: 'img/skills/react-redux.png',
    },
    {
        value: 7,
        text: 'Vue.js/Vuex',
        icon: 'img/skills/vue-vuex.png',
    },
    {
        value: 8,
        text: 'PHP',
        icon: 'img/skills/php.png',
    },
    {
        value: 8,
        text: 'Laravel',
        icon: 'img/skills/laravel.png',
    },
    {
        value: 6,
        text: 'Node.js',
        icon: 'img/skills/node.png',
    },
    {
        value: 6,
        text: 'Express.js',
        icon: 'img/skills/express.png',
    },
    {
        value: 7,
        text: 'MySQL',
        icon: 'img/skills/mysql.png',
    },
];

const others = [
    {
        value: 6,
        text: 'Jira',
        icon: 'img/skills/jira.png',
    },
    {
        value: 6,
        text: 'Confluence',
        icon: 'img/skills/confluence.png',
    },
];

function Skills() {
    return (
        <Box
            color="success.main"
            sx={(theme) => ({
                padding: '3em',
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                [theme.breakpoints.up('lg')]: {
                    height: '100vh',
                    scrollSnapAlign: 'center',
                },
            })}>
            <Container
                sx={(theme) => ({
                    fontSize: '1vw',
                    [theme.breakpoints.up('xxl')]: {
                        fontSize: '1.2rem',
                    },
                })}>
                <SkillGrid
                    title="Core Technologies"
                    items={skills}
                />
                <SkillGrid
                    title="Others"
                    items={others}
                />
            </Container>
        </Box>
    );
}

export default Skills;
