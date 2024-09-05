import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBlog, removeBlog } from '../reducers/blogReducer'; 

const mockBlogs = [
    { id: 1, title: 'First Blog', content: 'This is the first blog post.' },
    { id: 2, title: 'Second Blog', content: 'This is the second blog post.' },
];
export const fetchBlogs = createAsyncThunk('blog/fetchBlogs', async () => {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockBlogs); 
        }, 1000);
    });
});
export const createBlog = (newBlog) => (dispatch) => {
    dispatch(addBlog(newBlog));
};
export const deleteBlog = (blogId) => (dispatch) => {
    dispatch(removeBlog(blogId)); 
};
