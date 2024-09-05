import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import CreateBlogPage from './pages/CreateBlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import CategoryPage from './pages/CategoryPage'; 
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes> 
                <Route path="/" element={<HomePage />} /> 
                <Route path="/create" element={<CreateBlogPage />} />
                <Route path="/blog/:id" element={<BlogDetailPage />} />
                <Route path="/category/:id" element={<CategoryPage />} /> 
                <Route path="*" element={<NotFoundPage />} /> 
            </Routes>
        </Router>
    );
};
export default App;