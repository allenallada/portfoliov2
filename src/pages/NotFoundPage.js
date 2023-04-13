import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NotFoundPage() {
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
                    Oops...
                </Typography>
                <Typography variant="h3">
                    Sorry, we can't find what your looking for..
                </Typography>
            </Box>
        </Box>
    );
}
