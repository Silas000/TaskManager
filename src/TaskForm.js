import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './App.css'; // Importe o arquivo de estilos

function TaskForm({ onAddTask, editingTask, onEditTask, onSaveEditedTask }) {
  const [task, setTask] = useState({
    name: '',
    description: '',
    dueDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      onSaveEditedTask({ ...task, id: editingTask.id });
      onEditTask(null);
    } else {
      onAddTask({ ...task, id: new Date().getTime() });
    }
    setTask({ name: '', description: '', dueDate: '' });
  };

  return (
    <form className="task-form"> {/* Aplica a classe CSS ao formulário */}
      <TextField
        label="Nome da Tarefa"
        name="name"
        value={task.name}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Descrição"
        name="description"
        value={task.description}
        onChange={handleInputChange}
        fullWidth
      />
      <label htmlFor="dueDate">Data de Vencimento:</label>
      <TextField
        name="dueDate"
        type="date"
        value={task.dueDate}
        onChange={handleInputChange}
        fullWidth
      />
      <div className="button-container"> {/* Aplica a classe CSS ao contêiner do botão */}
        <Button type="submit" variant="contained" color="primary">
          {editingTask ? 'Salvar Edição' : 'Adicionar Tarefa'}
        </Button>
      </div>
    </form>
  );
}

export default TaskForm;
