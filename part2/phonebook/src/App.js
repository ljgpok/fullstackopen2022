import { useState } from "react";

import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newPhone,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewPhone("");
  };

  // personsToShow = showAll? persons: persons.map

  return (
    <div>
      <h2>Phonebook</h2>

      <h2>add a new</h2>

      <PersonForm
        newName={newName}
        newPhone={newPhone}
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} />
      {/* {persons.map((person) => (
        <h3 key={person.name}>
          {person.name} {person.number}
        </h3>
      ))} */}
    </div>
  );
};

export default App;
