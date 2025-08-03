import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

export default function App() {
  const [showBlogs, setShowBlogs] = useState(true);
  const [books] = useState([
    { title: 'React Explained', author: 'Zac Gordon' },
    { title: 'Learning JavaScript', author: 'Ethan Brown' }
  ]);
  const [course] = useState({
    title: 'Full Stack Development',
    instructor: 'Ms. Priya',
    duration: '8 weeks'
  });

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>📘 BloggerApp Dashboard</h1>

      {/* Conditional Rendering - Using Ternary */}
      {showBlogs ? <BlogDetails show={true} /> : <p>Blogs are hidden</p>}

      <button onClick={() => setShowBlogs(!showBlogs)}>
        {showBlogs ? "Hide Blogs" : "Show Blogs"}
      </button>

      <hr />

      {/* Conditional Rendering - Using Logical && */}
      {books.length > 0 && <BookDetails books={books} />}

      <hr />

      {/* Conditional Rendering - Using if/else inside child component */}
      <CourseDetails course={course} />
    </div>
  );
}
