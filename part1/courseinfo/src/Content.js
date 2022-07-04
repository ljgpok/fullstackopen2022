import React from "react";

import Part from "./Part";

export default function Content({ course }) {
  let parts = course.parts;
  const [part1, part2, part3] = parts;
  return (
    <div>
      <Part name={part1.name} exercise={part1.exercises} />
      <Part name={part2.name} exercise={part2.exercises} />
      <Part name={part3.name} exercise={part3.exercises} />
    </div>
  );
}
