import * as React from 'react';
import TopSection from '../components/TopSection';
import Experience from '../components/Experience';
import TopNav from '../components/TopNav';

function Home() {
    return (
        <>
            <TopNav />
            <TopSection />
            <Experience />
        </>
    );
}

// export default withRoot(Index);
export default Home;
