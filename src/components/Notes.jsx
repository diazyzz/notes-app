/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
function Notes({ notes, onDelete, onArchive, onRestore, isArchived }) {
  return (
    <>
      <div className="list-notes">
        <h2 className="title-notes">
          {isArchived ? "Archived Notes" : "Active Notes"}
        </h2>
        <div className="card-notes">
          {/* conditional rendering */}
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <div key={note.id} className="note-card">
                <h3>{note.title}</h3>
                <p className="tanggal">{new Date(note.createdAt).toLocaleString()}</p>
                {note.body}
                <button
                  className="btn-notes"
                  onClick={() => onDelete(index, isArchived)}
                >
                  Delete
                </button>
                {isArchived ? (
                  <button
                    className="btn-notes"
                    onClick={() => onRestore(index)}
                  >
                    Restore
                  </button>
                ) : (
                  <button
                    className="btn-notes"
                    onClick={() => onArchive(index)}
                  >
                    Archive
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>Tidak ada catatan.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Notes;
