import React, { useContext, useEffect } from "react";
import contextValue from "../context/notes/partContext";
import Partitem from "./Partitem";
import Addnote from "./AddNote";
import { useNavigate } from 'react-router-dom'
const Notes = () => {
  let naviagte = useNavigate();
  const context = useContext(contextValue);

  const { Parts, GetallParts } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      GetallParts();
    }
    // eslint-disable-next-line
    else {
      naviagte('/login')
    }
  },[]);

  return (
    <>
      <Addnote />
      <div className="row my-3">
        <h3>All Motor Parts</h3>
        {Parts.map((note) => {
          return <Partitem key={note._id} part={note} />;
        })}
      </div>
    </>

  );
};

export default Notes;
