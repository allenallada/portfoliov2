import { Box } from '@mui/material';
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
        value: 5,
        text: 'Vue.js/Vuex',
        icon: 'img/skills/vue-vuex.png',
    },
    {
        value: 7,
        text: 'PHP',
        icon: 'img/skills/php.png',
    },
    {
        value: 6,
        text: 'Laravel',
        icon: 'img/skills/laravel.png',
    },
    {
        value: 5,
        text: 'Node.js',
        icon: 'img/skills/node.png',
    },
    {
        value: 5,
        text: 'Express.js',
        icon: 'img/skills/express.png',
    },
    {
        value: 6,
        text: 'MySQL',
        icon: 'img/skills/mysql.png',
    },
];

const others = [
    {
        value: 5,
        text: 'Jira',
        icon: 'img/skills/jira.png',
    },
    {
        value: 5,
        text: 'Confluence',
        icon: 'img/skills/confluence.png',
    },
];

function Skills() {
    return (
        <Box
            color="success.main"
            sx={(theme) => ({
                fontSize: '1vw',
                padding: '3em',
                height: {
                    md: '100vh',
                },
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                [theme.breakpoints.up('lg')]: {
                    height: '100vh',
                    scrollSnapAlign: 'center',
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
        </Box>
    );
}

export default Skills;
