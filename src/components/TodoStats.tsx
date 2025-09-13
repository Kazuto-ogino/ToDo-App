import React from 'react';
import './TodoStats.css';

interface TodoStatsProps {
  total: number;
  completed: number;
  active: number;
  onClearCompleted: () => void;
}

export const TodoStats: React.FC<TodoStatsProps> = ({
  total,
  completed,
  active,
  onClearCompleted,
}) => {
  if (total === 0) return null;

  return (
    <div className="todo-stats">
      <div className="stats-info">
        <span className="stat-item">
          総数: <strong>{total}</strong>
        </span>
        <span className="stat-item">
          完了: <strong>{completed}</strong>
        </span>
        <span className="stat-item">
          未完了: <strong>{active}</strong>
        </span>
      </div>
      
      {completed > 0 && (
        <button
          onClick={onClearCompleted}
          className="clear-completed-btn"
        >
          完了済みを削除
        </button>
      )}
    </div>
  );
};
