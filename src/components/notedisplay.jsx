import React, { useEffect, useState } from "react";
import Showdown from "showdown";

const NoteDisplay = ({ id, title, content }) => {
  const converter = new Showdown.Converter();
  let htmlContent = converter.makeHtml(content);

  function createMarkup() {
    return { __html: htmlContent };
  }
  return (
    <div>
      <h1 className="text-primary">{title}</h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default NoteDisplay;
