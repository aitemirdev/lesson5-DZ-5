import React from 'react';

const NamesList = ({ names, handleChangeName, newName }) => {
    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>
                    {name}
                    <button
                        onClick={() => handleChangeName(index)}
                        disabled={newName.trim() === ''}
                    >
                        Change
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default NamesList;