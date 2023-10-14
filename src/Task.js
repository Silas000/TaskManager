import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

function Task({ task }) {
  return (
    <ListItem>
      <ListItemText
        primary={task.name}
        secondary={
          <span>
            {task.description && `Descrição: ${task.description}`}
            {task.dueDate && (
              <>
                <br />
                Data de Vencimento: {new Date(task.dueDate).toLocaleDateString()}
              </>
            )}
          </span>
        }
      />
    </ListItem>
  );
}

export default Task;
