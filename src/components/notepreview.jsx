import React, { useEffect, useState } from "react";

const NotePreview = ({ id, title, content, handleClickPreview }) => {
  return (
    <div
      onClick={(e) => {
        handleClickPreview(e, id, title, content);
      }}
    >
      <h3 className="text-primary">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default NotePreview;
