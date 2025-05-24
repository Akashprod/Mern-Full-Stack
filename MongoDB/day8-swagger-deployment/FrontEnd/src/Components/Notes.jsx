import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const fetching = async () => {
    try {
      const response = await fetch("http://localhost:8070/notes/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async(noteID) => {
    const response = await fetch(`http://localhost:8070/notes/delete/${noteID}`, {
      method: "Delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
   if (response.ok) {
      fetching(); // refresh notes
    } else {
      console.error("Failed to delete note");
    }

  };

  useEffect(() => {
    fetching();
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("token", res.token);
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {notes
        ? notes.map((note) => {
            return (
              <div key={note.id || note._id}>
                <h2>{note.title}</h2>
                <p>{note.body}</p>
                <button onClick={() => deleteNote(note._id)}>Delete</button>
              </div>
            );
          })
        : "No notes was created"}
    </div>
  );
};

export default Notes;
