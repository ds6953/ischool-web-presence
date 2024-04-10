import React, { useEffect, useState } from 'react';
import { fetchEmployment } from '../services/api';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function Employment() {
    const [employmentData, setEmploymentData] = useState(null);

    useEffect(() => {
        fetchEmployment().then(data => {
            setEmploymentData(data.employment); // Adjust based on the actual structure of the response
        });
    }, []);

    if (!employmentData) {
        return <Typography>Loading employment data...</Typography>;
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Employment Outcomes
            </Typography>
            <Grid container spacing={3}>
                {/* Example for displaying a list of employers, adjust as needed */}
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Employers
                            </Typography>
                            {employmentData.employers.map((employer, index) => (
                                <Typography key={index} variant="body2">
                                    {employer}
                                </Typography>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>
                {/* You can add more sections here like statistics, salaries, etc., similar to the employers' list */}
            </Grid>
        </div>
    );
}

export default Employment;
