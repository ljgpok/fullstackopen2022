import React from "react";

export default function Total({ course }) {
  let total =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;
  return <div>Number of exercises {total}</div>;
}
