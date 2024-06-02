import React from 'react';

const NameInput = ({ newName, setNewName, handleAddName }) => {
    return (
        <div>
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter a name"
            />
            <button onClick={handleAddName} disabled={newName.trim() === ''}>
                Add
            </button>
        </div>
    )
}

export default NameInput;