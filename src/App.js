import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import storage from 'local-storage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const savedTasks = storage.get('tasks');
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  const saveTasksToLocalStorage = (tasksToSave) => {
    storage.set('tasks', tasksToSave);
  };

  const onAddTask = (newTask) => {
    const id = new Date().getTime();
    const newTasks = [...tasks, { ...newTask, id }];
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
  };

  const onEditTask = (taskToEdit) => {
    setEditingTask(taskToEdit);
  };

  const onSaveEditedTask = (editedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editedTask.id) {
        return editedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    setEditingTask(null);
  };

  const onDeleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
    setEditingTask(null);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Gerenciador de Tarefas
      </Typography>
      <TaskForm
        onAddTask={onAddTask}
        editingTask={editingTask}
        onEditTask={onEditTask}
        onSaveEditedTask={onSaveEditedTask}
      />
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
    </Container>
  );
}

export default App;
