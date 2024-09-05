import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import BlogEditor from '../components/BlogEditor';
import { createBlog } from '../redux/actions/blogActions'; 

const CreateBlogPage = () => {
    const dispatch = useDispatch();
    const [blogPost, setBlogPost] = useState({ title: '', content: '', id: Date.now() });
    const handleSave = () => {
        dispatch(createBlog(blogPost)); 
        setBlogPost({ title: '', content: '', id: Date.now() }); 
    };
    return (
        <div>
            <BlogEditor blogPost={blogPost} setBlogPost={setBlogPost} onSave={handleSave} />
        </div>
    );
};

export default CreateBlogPage;
