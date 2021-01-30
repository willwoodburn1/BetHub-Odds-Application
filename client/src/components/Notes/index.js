import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";



function Notes(props) {

    console.log("this is props", props);
    console.log("the notes for this bet", props.data.state.bet.Notes)

    const [notes, setNotes] = useState(props.data.state.bet.Notes || []);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        API.getNotesByBet(props.data.state.bet.id)
            .then(res =>
                setNotes(res.data)
            )
            .catch(err => console.log(err))
    };

    function deleteNote(id) {
        API.deleteNote(id)
            .then(() => {
                // Set the new state, filter the current notes and remove the note with the matching id
                // use the filter method (notes.filter())
                setNotes(notes.filter(note => {
                    return note.id !== id
                }))
            })
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.content) {
            API.saveNote({
                betId: props.data.state.bet.id,
                title: formObject.title,
                content: formObject.content
            })
                .then(res => {
                    setNotes([...notes, res.data])
                })
                .catch(err => console.log(err))
        }
    };


    return (
        <div>
            <h1 id="noteInputTitle"> Record a Note for Later Reference</h1>
            <form className="form-group mt-5 mb-5" id="noteInputForm" onSubmit={handleFormSubmit}>
                <textarea onChange={handleInputChange} name="title" className="form-control mb-5" placeholder="Title" />
                <textarea onChange={handleInputChange} name="content" className="form-control mb-5" placeholder="Content" />
                <button className="btn btn-success mt-3 mb-5" type="submit">
                    Save Note
                </button>
            </form>

            <div>
                {notes.map(note => {
                    return (
                        <div className="card" id="noteCard" >
                            <div className="card-body" id="noteCardBody">
                                <h2 className="card-title"> {note.title} </h2>
                                <h6 className="card-subtitle mb-2 text-muted"> Created At: {note.createdAt} </h6>
                                <h4 className="card-text">{note.content}</h4>
                                <button id="deleteBetBtn" onClick={() => deleteNote(note.id)}> X </button>
                            </div>
                        </div>


                        // <div className="noteDiv">
                        //     <div>
                        //         <div className="card cardNote ">
                        //             <div className="card-content white-text">
                        //                 <h3> {note.title} </h3>
                        //                 <p id="noteText"> {note.content}  </p>
                        //                 <button id="deleteBetBtn" onClick={() => deleteNote(note.id)}> X </button>
                        //             </div>

                        //         </div>
                        //     </div>
                        // </div>
                    )

                })}

            </div>

        </div>
    )
}
export default Notes;






// function Notes({ data }) {

//     const [notes, setNotes] = useState([]);
//     const [formObject, setFormObject] = useState({})

//     function handleInputChange(event) {
//         const { name, value } = event.target;
//         setFormObject({ ...formObject, [name]: value })
//     };

//     function handleFormSubmit(event) {
//         event.preventDefault();
//         console.log(formObject);
//         console.log(data);
//         if (formObject.notes) {
//             API.updateBet({
//                 id: data.state.bet.id,
//                 notes: formObject.notes
//             })
//                 .then(setNotes([...notes, formObject.notes]))
//                 .catch(err => console.log(err))
//         }
//     }

//     console.log("This is here", data)

//     return (
//         <div>
//             <h1 id="noteInputTitle"> Record a Note for Later Reference</h1>
//             <form className="form-group mt-5 mb-5" id="noteInputForm" onSubmit={handleFormSubmit}>
//                 <textarea onChange={handleInputChange} name="notes" className="form-control mb-5" placeholder="Body" />
//                 <button className="btn btn-success mt-3 mb-5" type="submit">
//                     Save Note
//                 </button>
//             </form>

//             <div>
//                 {notes.map(note => {
//                     console.log(note)
//                     return (
//                         <div className="noteDiv">
//                             <div>
//                                 <div className="card cardNote ">
//                                     <div className="card-content white-text">
//                                         <p id="noteText"> {note}  </p>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     )

//                 })}

//             </div>

//         </div>
//     )
// }
// export default Notes;