import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = ({ news }) => {
    const { _id, title, details } = news;
    return (
        <Card className="text-center mt-4">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCard;