import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({course}) => {

    const {title, details, image_url} = course

    return (
        <div className='mt-4'>
            <Card>
                <h4 className='m-3'>{title}</h4>
                <Card.Body>
                    <Image src={image_url} fluid />
                    <>
                        {
                            details.length > 180 ?
                            <p>
                                {details.slice (0, 130) + '...'} <Link to={`/details/${course._id}`}>See more</Link>
                            </p>
                            :
                            <p>
                                {details}
                            </p> 
                        }
                    </>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseSummaryCard;