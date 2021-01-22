import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";



function Notes({ data }) {

    const [notes, setNotes] = useState([]);
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(formObject);
        console.log(data);
        if (formObject.notes) {
            API.updateBet({
                id: data.state.bet.id,
                notes: formObject.notes
            })
                .then(setNotes([...notes, formObject.notes]))
                .catch(err => console.log(err))
        }
    }

    console.log("This is here", data)

    return (
        <div>
            <h1 id="noteInputTitle"> Record a Note for Later Reference</h1>
            <form className="form-group mt-5 mb-5" id="noteInputForm" onSubmit={handleFormSubmit}>
                <textarea onChange={handleInputChange} name="notes" className="form-control mb-5" placeholder="Body" />
                <button className="btn btn-success mt-3 mb-5" type="submit">
                    Save Note
                </button>
            </form>

            <div>
                {notes.map(note => {
                    console.log(note)
                    return (
                        <div className="noteDiv">
                            <div>
                                <div className="card cardNote ">
                                    <div className="card-content white-text">
                                        <p id="noteText"> {note}  </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )

                })}

            </div>

        </div>
    )
}
export default Notes;