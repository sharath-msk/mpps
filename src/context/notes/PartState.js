import { useState } from "react";
import noteContext from "./partContext";

const PartState = (props) => {
  const partsInitial = []
  const [Parts, setParts] = useState(partsInitial)

  //Get all notes
  const GetallParts = async () => {
    const response = await fetch(`http://localhost:4000/api/parts/fetchallparts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify()
    });
    const json = await response.json()
    setParts(json)
  }

  //Add a part
  const addPart = async (title, location) => {
    const response = await fetch(`http://localhost:4000/api/parts/addpart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, location })
    });

    const part = await response.json();
    setParts(Parts.concat(part))
  }

  // Delete a Note
  const deletePart = async (id) => {
    const response = await fetch(`http://localhost:4000/api/parts/deletepart/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json)
    const newParts = Parts.filter((part) => { return part._id !== id })
    setParts(newParts)
  }


  //Get Location of Part
  const GetPart = async () => {
    const response = await fetch(`http://localhost:4000/api/parts/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const part = await response.json()
    setParts(part)
  }


  return (
    <noteContext.Provider value={{ Parts, setParts, addPart, deletePart, GetallParts, GetPart }}>{props.children}</noteContext.Provider>
  );
};

export default PartState;
