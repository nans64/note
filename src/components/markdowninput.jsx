import React, { useEffect, useState } from "react";

const MarkDownInput = ({
  title,
  content,
  handleTitleChange,
  handleContentChange,
  handleClick,
}) => {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={(e) => handleTitleChange(e)}
          type="text"
          className="form-control"
          name="title"
          placeholder="Le titre de votre note"
          value={title}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          name="content"
          onChange={(e) => handleContentChange(e)}
          rows="10"
          placeholder="Le contenu de votre note"
          value={content}
        ></textarea>
      </div>
      <input
        onClick={(e) => handleClick(e)}
        className="btn btn-warning"
        type="submit"
        value="Sauvegarder"
      />
    </form>
  );
};

export default MarkDownInput;
