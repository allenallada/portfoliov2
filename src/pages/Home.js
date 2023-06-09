import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import TopSection from '../sections/TopSection';
import Experience from '../sections/Experience';
import TopNav from '../sections/TopNav';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import AboutMe from '../sections/AboutMe';
import BottomSection from '../sections/BottomSection';
import { useTheme } from '@mui/material/styles';

function Home() {
    const myTheme = useTheme();
    const animate = useMediaQuery(myTheme.breakpoints.up('lg'));
    console.log(animate);
    return (
        <Box
            component="div"
            sx={(theme) => ({
                position: 'relative',
                overflowY: 'auto',
                overscrollBehaviorY: 'contain',
                scrollSnapType: 'y mandatory',
                height: '100vh',
                width: '100%',
                fontSize: '1vw',
                [theme.breakpoints.up('lg')]: {
                    scrollSnapType: 'y mandatory',
                },
                [theme.breakpoints.down('md')]: {
                    fontSize: '0.7em',
                },
                [theme.breakpoints.up('xxl')]: {
                    fontSize: '1.2rem',
                },
            })}>
            <TopNav />
            <TopSection animate={animate} />
            <Experience animate={animate} />
            <Projects animate={animate} />
            <Skills animate={animate} />
            <AboutMe animate={animate} />
            <BottomSection animate={animate} />
        </Box>
    );
}

// export default withRoot(Index);
export default Home;
