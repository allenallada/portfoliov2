import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import SkillGrid from '../components/SkillGrid';
import { useInView } from 'react-intersection-observer';

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

function Skills({ animate }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    });

    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        setVisibility(animate === false ? true : inView);
    }, [inView, animate]);

    return (
        <Box
            color="success.main"
            sx={(theme) => ({
                position: 'relative',
                width: '100%',
                [theme.breakpoints.up('lg')]: {
                    height: '100vh',
                    scrollSnapAlign: 'center',
                },
            })}>
            <Box
                ref={ref}
                component="div"
                height="100%"
                sx={(theme) => ({
                    marginX: 'auto',
                    padding: '3em',
                    fontSize: '1vw',
                    color: 'indigo.dark',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    maxWidth: '1400px',
                    [theme.breakpoints.up('xxl')]: {
                        fontSize: '1rem',
                    },
                })}>
                <SkillGrid
                    visible={visible}
                    title="Core Technologies"
                    items={skills}
                />
                <SkillGrid
                    visible={visible}
                    title="Others"
                    items={others}
                />
            </Box>
        </Box>
    );
}

export default Skills;
