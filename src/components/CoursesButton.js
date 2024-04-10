import React, { useState } from 'react';
import { fetchCourses } from '../services/api';
import { Button, List, ListItem, ListItemText } from '@mui/material';

function CoursesButton() {
    const [courses, setCourses] = useState([]);

    const handleFetchCourses = () => {
        fetchCourses().then(data => setCourses(data.courses)); // Adjust based on actual API
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleFetchCourses}>
                Load Courses
            </Button>
            <List>
                {courses.map((course, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={course.title} secondary={course.description} />
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default CoursesButton;
