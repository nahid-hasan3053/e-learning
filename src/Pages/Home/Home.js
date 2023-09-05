import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../SharedPages/CourseSummaryCard/CourseSummaryCard';

const Home = () => {

    const allCourses = useLoaderData();
    
    return (
        <div>
            <h3>Total courses: {allCourses.length}</h3>
            {
                allCourses.map( course => <CourseSummaryCard key={course._id} course={course}></CourseSummaryCard>)
            }
        </div>
    );
};

export default Home;