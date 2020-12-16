import React, { useState } from 'react';

const CreateTodo = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = ev => {
        ev.preventDefault();
        onSubmit({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="title"
                type="text"
                value={title}
                onChange={ev => setTitle(ev.target.value)} />
            <input
                placeholder="description"
                type="text"
                value={description}
                onChange={ev => setDescription(ev.target.value)} />
            
            <input type="submit" />
        </form>
    );
};

export default CreateTodo;