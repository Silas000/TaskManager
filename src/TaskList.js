import React from 'react';
import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function TaskList({ tasks, onDeleteTask, onEditTask }) {
  return (
    <List>
      {tasks.map((task) => (
        <div key={task.id}>
          <ListItem>
            <ListItemText
              primary={task.name}
              secondary={
                <span>
                  {task.description ? `Descrição: ${task.description}` : null}
                  {task.dueDate ? (
                    <>
                      <br />
                      Data de Vencimento: {new Date(task.dueDate).toLocaleDateString()}
                    </>
                  ) : null}
                </span>
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="editar"
                onClick={() => onEditTask(task)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="deletar"
                onClick={() => onDeleteTask(task)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </div>
      ))}
    </List>
  );
}

export default TaskList;
