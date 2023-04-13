import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './Home';
import Projects from './Projects';
import Plugs from './Plugs';
import Resume from './Resume';
import NotFoundPage from './NotFoundPage';
import nProgress from 'nprogress';

export default function App() {
    let location = useLocation();
    useEffect(() => {
        nProgress.start();
        nProgress.done();
    }, [location.pathname]);

    return (
        <Routes>
            <Route
                element={<Home />}
                path="/"
            />
            <Route
                element={<Projects />}
                path="/projects"
            />
            <Route
                element={<Plugs />}
                path="/plugs"
            />
            <Route
                element={<Resume />}
                path="/resume"
            />
            <Route
                path="*"
                exact={true}
                element={<NotFoundPage />}
            />
        </Routes>
    );
}
