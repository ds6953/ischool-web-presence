// Define the base URL for the iSchool API
const BASE_URL = 'https://ischool.gccis.rit.edu/api';

// Fetch general information about the iSchool
export const fetchAbout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/about`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error fetching about info: ", error);
    throw error;
  }
};

// Fetch information on degrees offered by the iSchool
export const fetchDegrees = async () => {
  try {
    const response = await fetch(`${BASE_URL}/degrees`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error fetching degrees: ", error);
    throw error;
  }
};

// Fetch information on minors offered by the iSchool
export const fetchMinors = async () => {
  try {
    const response = await fetch(`${BASE_URL}/minors`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error fetching minors: ", error);
    throw error;
  }
};

// Fetch employment information related to the iSchool
export const fetchEmployment = async () => {
  try {
    const response = await fetch(`${BASE_URL}/employment`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error fetching employment info: ", error);
    throw error;
  }
};

// Fetch information on people associated with the iSchool (faculty, staff, etc.)
export const fetchPeople = async () => {
  try {
    const response = await fetch(`${BASE_URL}/people`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error fetching people info: ", error);
    throw error;
  }
};

// Fetch information on courses offered by the iSchool (on demand)
export const fetchCourses = async () => {
  try {
    const response = await fetch(`${BASE_URL}/courses`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error fetching courses: ", error);
    throw error;
  }
};
