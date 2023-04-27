import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsNews from '../EditorsNews/EditorsNews';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, author, category_id } = news;

    return (
        <div>
            <Card className='mb-4'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger">All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsNews></EditorsNews>
        </div>

    );
};

export default News;