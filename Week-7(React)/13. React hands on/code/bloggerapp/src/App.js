import React from 'react';
import './App.css';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div className="container">
      <div className="section">
        <CourseDetails />
      </div>
      <div className="section with-border">
        <BookDetails />
      </div>
      <div className="section with-border">
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;




