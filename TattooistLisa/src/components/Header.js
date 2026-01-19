import React from 'react';
import './Css/Header.css';
import lisaImage from '../lisaImages/lisa.jpg';
import { Box, Typography, Button, Stack } from '@mui/material';

const Header = () => {
    return (
        <Box
            component="header"
            sx={{
                backgroundImage: `url(${lisaImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                Height:  '300px' ,
                Width: '300px',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                p: 2
            }}
        >
            <Box>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        mb: { xs: 2, md: 4 },
                        fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3.75rem' },
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
                >
                    LAKEWOOD, WA
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="center"
                >
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: 'white',
                            color: '#1a2a4f',
                            '&:hover': { backgroundColor: '#f0f0f0' }
                        }}
                    >
                        How to Book
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            borderColor: 'white',
                            color: 'white',
                            '&:hover': { borderColor: '#f0f0f0', backgroundColor: 'rgba(255,255,255,0.1)' }
                        }}
                    >
                        Aftercare
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default Header;
