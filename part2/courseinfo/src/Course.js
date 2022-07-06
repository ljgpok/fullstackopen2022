import React from "react";

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Topics = ({ name }) => {
  console.log("name is", name);
  return <h2>{name}</h2>;
};

const Content = ({ course }) => {
  console.log("course is", course);
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  console.log("parts", parts);
  const totalExercises = parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0);
  return <strong>Number of exercises: {totalExercises}</strong>;
};

export default function Course({ courses }) {
  console.log("course", courses);
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Topics name={course.name} />
          <Content course={course} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
}
