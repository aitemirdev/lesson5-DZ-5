import React, { useState } from 'react';
import NameInput from './NameInput';
import NamesList from './NamesList';

const App = () => {
    const [names, setNames] = useState([])
    const [newName, setNewName] = useState('')

    const handleAddName = () => {
        if (newName.trim() !== '') {
            setNames([...names, newName.trim()]);
            setNewName('')
        }
    };

    const handleChangeName = (index) => {
        if (newName.trim() !== '') {
            const updatedNames = [...names];
            updatedNames[index] = newName.trim();
            setNames(updatedNames);
            setNewName('')
        }
    }

    return (
        <div>
            <NameInput
                newName={newName}
                setNewName={setNewName}
                handleAddName={handleAddName}
            />
            {names.length === 0 ? (
                <p>The list is empty (список пуст)</p>
            ) : (
                <NamesList names={names} handleChangeName={handleChangeName} newName={newName} />
            )}
        </div>
    )
}

export default App;