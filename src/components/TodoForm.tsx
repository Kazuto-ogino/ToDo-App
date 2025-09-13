import React, { useState } from 'react';
import './TodoForm.css';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(text.trim());
    setText('');
    
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add New ToDo"
        className="todo-input"
      />
      <button type="submit" className="add-btn" disabled={!text.trim()}>
        追加
      </button>
    </form>
  );
};
