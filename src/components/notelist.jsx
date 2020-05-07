import React, { useEffect, useState } from "react";
import NotePreview from "./notepreview";

const NoteList = ({ notelist, handleClickPreview }) => {
  return (
    <>
      <div className="mt-5">
        {notelist.map((note, index) => (
          <NotePreview
            handleClickPreview={handleClickPreview}
            key={index}
            id={note.id}
            content={note.content}
            title={note.title}
          />
        ))}
      </div>
    </>
  );
};

export default NoteList;
