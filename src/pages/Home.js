import * as React from 'react';
import TopSection from '../sections/TopSection';
import Experience from '../sections/Experience';
import TopNav from '../sections/TopNav';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import { Box } from '@mui/material';

function Home() {
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
                    fontSize: '0.8em',
                },
            })}>
            <TopNav />
            <TopSection />
            <Experience />
            <Projects />
            <Skills />
        </Box>
    );
}

// export default withRoot(Index);
export default Home;
