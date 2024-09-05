import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [], 
    },
    reducers: {
        addBlog: (state, action) => {
            state.blogs.push(action.payload); 
        },
        removeBlog: (state, action) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload); 
        },
        setBlogs: (state, action) => {
            state.blogs = action.payload; 
        },
    },
});
export const { addBlog, removeBlog, setBlogs } = blogSlice.actions; 
export default blogSlice.reducer;
