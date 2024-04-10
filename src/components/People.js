import React, { useEffect, useState } from 'react';
import { fetchPeople } from '../services/api';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetchPeople().then(data => setPeople(data.faculty)); // Adjust according to actual data structure
    }, []);

    return (
        <Grid container spacing={2}>
            {people.map((person, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{person.name}</Typography>
                            <Typography variant="body2">{person.title}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default People;
