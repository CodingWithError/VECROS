import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const BlogDetailPage = ({ blogs }) => {
    const { id } = useParams(); 
    const blog = blogs.find((blog) => blog.id === parseInt(id));
    if (!blog) {
        return (
            <Container>
                <Typography variant="h4" gutterBottom>
                    Blog Not Found
                </Typography>
                <Typography variant="body1">
                    The blog you are looking for does not exist.
                </Typography>
            </Container>
        );
    }
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {blog.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
                Published on: {new Date(blog.publishedDate).toLocaleDateString()}
            </Typography>
            <Box sx={{ marginTop: 2 }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 'auto' }} />
            </Box>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
                {blog.content} {/* Assuming blog.content contains the full text */}
            </Typography>
        </Container>
    );
};

export default BlogDetailPage;
