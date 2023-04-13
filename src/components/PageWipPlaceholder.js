import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BuildIcon from '@mui/icons-material/Build';

export default function PageWipPlaceholder() {
    return (
        <Box
            sx={(theme) => ({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                color: 'indigo.dark',
            })}>
            <Box>
                <Link to="/">
                    <Button variant="outlined">
                        <ArrowBackIcon />
                        Go back to Home page
                    </Button>
                </Link>
                <Typography
                    textAlign="center"
                    variant="h1">
                    <BuildIcon fontSize="50" />
                </Typography>
                <Typography variant="h3">
                    This page is still under construction
                </Typography>
            </Box>
        </Box>
    );
}
