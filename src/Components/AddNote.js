import React, { useContext, useState } from 'react'
import contextValue from "../context/notes/partContext";

const Addnote = () => {

    const context = useContext(contextValue);

    const { addPart } = context;

    const [note, setNote] = useState({ title: "", location: "", tag: "def" })

    const handleclick = (e) => {
        e.preventDefault();
        addPart(note.title, note.location, note.tag);
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h2>Add Parts</h2>
            <form>
                <div className="form-group my-3">
                    <h3 htmlFor="title">Name of Motor Part</h3>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter Part Name" onChange={onChange} />
                </div>
                <div className="form-group">
                    <h3 htmlFor="location">Location of motor part</h3>
                    <input type="text" className="form-control" id="location" name="location" placeholder="Enter Location of Part" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary my-2" onClick={handleclick}>Add Part</button>
            </form>
        </div>
    )
}

export default Addnote
