import React, { useEffect, useState } from "react";

const NewNote = ({ handleClick, title, content }) => {
  return (
    <div>
      <button onClick={handleClick} className="btn btn-warning">
        Ajouter une note
      </button>
    </div>
  );
};

export default NewNote;
