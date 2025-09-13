import React from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoStats } from './components/TodoStats';
import { useTodos } from './hooks/useTodos';
import './App.css';

function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    getStats,
  } = useTodos();

  const stats = getStats();

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1> ToDo アプリ</h1>
        </header>

        <main className="app-main">
          <TodoForm onAdd={addTodo} />
          
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
          
          <TodoStats
            total={stats.total}
            completed={stats.completed}
            active={stats.active}
            onClearCompleted={clearCompleted}
          />
        </main>

      
      </div>
    </div>
  );
}

export default App;
