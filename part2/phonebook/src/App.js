import { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [isNotifStyle, setIsNotifStyle] = useState(false);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value);
  };

  const handleSearchVal = (event) => {
    console.log(event.target.value);
    setSearchVal(event.target.value);
  };

  const getPersonWithSameName = () => {
    const haveSameName = persons.filter((person) => {
      if (person.name.toLocaleLowerCase() === newName.toLocaleLowerCase()) {
        return person;
      }
      return false;
    });
    return haveSameName;
  };

  const checkSameName = () => {
    const haveSameName = getPersonWithSameName();

    if (haveSameName.length !== 0) {
      return true;
    }
    return false;
  };

  const isChangePersonNumberConfirm = (name) => {
    let isChangePersonNumber = window.confirm(
      `${name} is already added to phonebook, replace the old number with the new one?`
    );

    return isChangePersonNumber;
  };

  const updatePerson = (personObj) => {
    const samePerson = getPersonWithSameName();
    const id = samePerson[0]["id"];
    const name = samePerson[0]["name"];
    personService
      .update(id, personObj)
      .then((returnedPerson) => {
        setPersons(persons.map((p) => (p.id !== id ? p : returnedPerson)));
        setNewName("");
        setNewPhone("");
        setSuccessMessage(`added ${returnedPerson.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      })
      .catch((error) => {
        setIsNotifStyle(true);
        setSuccessMessage(`${name} has already been removed from server`);
        setPersons(persons.filter((p) => p.id !== id));
        setNewName("");
        setNewPhone("");

        setTimeout(() => {
          setIsNotifStyle(false);
          setSuccessMessage(null);
        }, 3000);
      });
  };

  const createPerson = (personObj) => {
    personService.create(personObj).then((returnedPerson) => {
      setPersons([...persons, returnedPerson]);
      setNewName("");
      setNewPhone("");
      setSuccessMessage(`added ${returnedPerson.name}`);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    });
  };

  const onNewPersonSubmit = (e) => {
    e.preventDefault();

    const personObj = {
      name: newName,
      number: newPhone,
    };
    const isPersonHaveSimillarName = checkSameName();
    let isChnagePersonInfo = false;

    if (isPersonHaveSimillarName) {
      isChnagePersonInfo = isChangePersonNumberConfirm(newName);
      if (isChnagePersonInfo) {
        updatePerson(personObj);
        return;
      }
      return;
    }

    createPerson(personObj);
  };

  const onDeletePerson = (id) => {
    const deletedPersonObj = persons.find((p) => p.id === id);
    const result = window.confirm(`Delete ${deletedPersonObj.name}?`);

    if (result)
      personService.deletePerson(id).then((deletedPersonId) => {
        setPersons(
          persons.filter((p) => {
            if (p.id !== id) {
              return p;
            }
          })
        );
        setSuccessMessage(`deleted`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={successMessage} isStyle={isNotifStyle} />

      <Filter searchVal={searchVal} handleSearchVal={handleSearchVal} />

      <h2>add a new</h2>

      <PersonForm
        newName={newName}a
        newPhone={newPhone}
        onNewPersonSubmit={onNewPersonSubmit}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons}
        onDeletePerson={onDeletePerson}
        searchVal={searchVal}
      />
    </div>
  );
};

export default App;
