import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../SharedPages/CourseSummaryCard/CourseSummaryCard';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div>
            {
                courses.map(course => <CourseSummaryCard key={course._id} course={course}></CourseSummaryCard>)
            }
        </div>
    );
};

export default Courses;