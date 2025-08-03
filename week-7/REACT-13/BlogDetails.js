import React from 'react';

export default function BlogDetails({ show }) {
  if (!show) return null;

  const blogs = [
    { id: 1, title: "React Basics", author: "John" },
    { id: 2, title: "Advanced React", author: "Jane" },
    { id: 3, title: "Hooks in Depth", author: "Alex" }
  ];

  return (
    <div>
      <h2>📝 Blog Articles</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h4>{blog.title}</h4>
          <p>Author: {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
