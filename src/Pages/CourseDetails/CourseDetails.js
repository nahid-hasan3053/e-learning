import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
const CourseDetails = () => {

    const info = useLoaderData();
    const {title, image_url, thumbnail_url, details} = info

    return (
        <div>
            <Card  style={{ width: '40rem' }}>
                <h4 className='m-3'>{title}</h4>
                <Card.Body>
                    <Image width={200} height={200} src={thumbnail_url} thumbnail  />
                    <br />
                    <>
                        {details}
                    </>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;