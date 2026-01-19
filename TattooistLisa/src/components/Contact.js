import React from 'react';
import './Css/Contact.css';
import { Box, Container, Typography, Link, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <Box component="section" id="contact" className="contact" sx={{ py: 5 }}>
            <Container>
                <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                        mb: 3,
                        fontWeight: 400,
                        letterSpacing: 2
                    }}
                >
                    CONTACT
                </Typography>

                <Stack spacing={2}>
                    <Link
                        href="https://www.instagram.com/tattooist__lisaa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            color: '#8b7355',
                            '&:hover': { color: '#6d5a45' }
                        }}
                    >
                        <InstagramIcon />
                        <Typography>tattooist__lisaa</Typography>
                    </Link>

                    <Link
                        href="mailto:tattooistlisaa@gmail.com"
                        underline="none"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            color: '#8b7355',
                            '&:hover': { color: '#6d5a45' }
                        }}
                    >
                        <EmailIcon />
                        <Typography>tattooistlisaa@gmail.com</Typography>
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
};

export default Contact;
