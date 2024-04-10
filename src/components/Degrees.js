// components/Degrees.js
import React, { useState, useEffect } from 'react';
import { fetchDegrees } from '../services/api'; 
import { Card, CardContent, Typography, Grid } from '@mui/material';

function Degrees() {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    fetchDegrees().then(data => setDegrees(data)); 
  }, []);

  return (
    <Grid container spacing={2}>
      {degrees.map((degree, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">{degree.title}</Typography>
              <Typography variant="body2">{degree.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Degrees;
