import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const BlogCard = ({ blog }) => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate(`/blog/${blog.id}`); 
    };
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={blog.image || 'default-image-url.jpg'} 
                alt={blog.title || 'No title available'}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {blog.title || 'Untitled'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {blog.excerpt || 'No excerpt available.'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Published on: {blog.publishedDate ? new Date(blog.publishedDate).toLocaleDateString() : 'Date not available'}
                </Typography>
                <Button size="small" onClick={handleClick}>
                    Read More
                </Button>
            </CardContent>
        </Card>
    );
};

export default BlogCard;
