import * as React from 'react';
import TopSection from '../sections/TopSection';
import Experience from '../sections/Experience';
import TopNav from '../sections/TopNav';
import Projects from '../sections/Projects';

function Home() {
    return (
        <>
            <TopNav />
            <TopSection />
            <Experience />
            <Projects />
        </>
    );
}

// export default withRoot(Index);
export default Home;
