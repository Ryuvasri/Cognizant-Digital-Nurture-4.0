import React from 'react';

export default function CourseDetails({ course }) {
  return (
    <div>
      {course ? (
        <div>
          <h2>🎓 Course Details</h2>
          <p><strong>Title:</strong> {course.title}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
        </div>
      ) : (
        <p>No course selected</p>
      )}
    </div>
  );
}
