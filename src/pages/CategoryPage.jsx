import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Container, Typography } from '@mui/material';
import BlogCard from '../components/BlogCard';

const CategoryPage = ({ blogs }) => {
    const { id } = useParams(); 
    const filteredBlogs = blogs.filter(blog => blog.category === id);
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {id} Blogs
            </Typography>
            <Grid container spacing={2}>
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
                        <Grid item xs={12} sm={6} md={4} key={blog.id}>
                            <BlogCard blog={blog} /> {/* Display each blog card */}
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1">No blogs found in this category.</Typography>
                )}
            </Grid>
        </Container>
    );
};

export default CategoryPage;
