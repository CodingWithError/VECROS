import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../redux/actions/blogActions';
import BlogCard from '../components/BlogCard';
import { Grid, Container } from '@mui/material';

const HomePage = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog.blogs); 
    useEffect(() => {
        dispatch(fetchBlogs()); 
    }, [dispatch]);
    return (
        <Container>
            <Grid container spacing={2}>
                {blogs.map((blog) => (
                    <Grid item xs={12} sm={6} md={4} key={blog.id}>
                        <BlogCard blog={blog} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomePage;
