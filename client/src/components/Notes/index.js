import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";



function Notes() {

    const [notes, setNotes] = useState([]);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        API.getNotes()
            .then(res =>
                setNotes(res.data)
            )
            .catch(err => console.log(err))
    };

    function deleteNote(id) {
        API.deleteNote(id)
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
                title: formObject.title,
                content: formObject.content
            })
                .then(res => loadNotes())
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
                    console.log(note)
                    return (
                        <div className="noteDiv">
                            <div>
                                <div className="card cardNote ">
                                    <div className="card-content white-text">
                                        <h3> {note.title} </h3>
                                        <p id="noteText"> {note.content}  </p>
                                        <button id="deleteBetBtn" onClick={() => deleteNote(note.id)}> X </button>
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