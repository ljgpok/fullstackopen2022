import React from "react";

const Persons = ({ persons }) => {
  return <div>{persons.map((person) => person.name)}</div>;
};

export default Persons;
