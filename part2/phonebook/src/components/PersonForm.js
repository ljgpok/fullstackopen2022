import React from "react";

const PersonForm = ({
  newName,
  newPhone,
  onNewPersonSubmit,
  handleNameChange,
  handlePhoneChange,
}) => {
  return (
    <form onSubmit={onNewPersonSubmit}>
      name: <input value={newName} onChange={handleNameChange} />
      <br />
      phone: <input value={newPhone} onChange={handlePhoneChange} />
      <button type="submit">add</button>
    </form>
  );
};

export default PersonForm;
