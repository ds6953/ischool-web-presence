import React, { useEffect, useState } from 'react';
import { fetchMinors } from '../services/api';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function Minors() {
    const [minors, setMinors] = useState([]);

    useEffect(() => {
        fetchMinors().then(data => {
            setMinors(data.minors); // Adjust based on the actual structure of the response
        });
    }, []);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Minors Offered
            </Typography>
            <Grid container spacing={3}>
                {minors.map((minor, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {minor.title}
                                </Typography>
                                <Typography variant="body2">
                                    {minor.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Minors;
