import React, { useContext } from "react";
import contextValue from "../context/notes/partContext";

const Noteitem = (props) => {

  const context = useContext(contextValue);

  const { deletePart } = context;

  const { part } = props;

  const ondelete = () => {
    deletePart(part._id);
  };

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <h5 className="card-title my-2 mx-2"><span>Name:</span>{part.title}</h5>
        <h6 className="card-text my-2 mx-2"><span>Location:</span>{part.location}</h6>
        <i className="mx-3 my-2 far fa-trash-alt" onClick={ondelete}></i>
      </div>
    </div>
  );
};

export default Noteitem;
