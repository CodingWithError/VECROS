import React from 'react';
import { TextField, Button } from '@mui/material';

const BlogEditor = ({ blogPost, setBlogPost, onSave }) => {
    return (
        <div>
            <TextField
                label="Title"
                value={blogPost.title}
                onChange={(e) => setBlogPost({ ...blogPost, title: e.target.value })}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Content"
                value={blogPost.content}
                onChange={(e) => setBlogPost({ ...blogPost, content: e.target.value })}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <Button variant="contained" color="primary" onClick={onSave}>
                Save Blog
            </Button>
        </div>
    );
};

export default BlogEditor;
