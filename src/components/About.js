import './About.css';
import React, { useState, useEffect } from 'react';
import { fetchAbout } from '../services/api';
import { Card, CardContent, Typography } from '@mui/material';

function About() {
    const [aboutInfo, setAboutInfo] = useState('');

    useEffect(() => {
        fetchAbout().then(data => {
            setAboutInfo(data.description);
        });
    }, []);

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">About Us</Typography>
                <Typography variant="body1">{aboutInfo}</Typography>
            </CardContent>
        </Card>
    );
   
}

export default About;
