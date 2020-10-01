import React from "react";
import { IconButton, Fade, Typography, CardContent, Card, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Storage } from '../storage'

const useStyles = makeStyles({
  contentStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export const TodoItem = ({ todo, setTodos }) => {
  const { contentStyle } = useStyles()
  return (
    <Fade in={true}>
      <Card raised className="todo-item">
        <CardContent className={contentStyle}>
          <Typography>{todo.text}</Typography>
          <IconButton area-label="delete" onClick={() => setTodos(Storage.delete(todo.id))}>
            <DeleteIcon/>
          </IconButton>
        </CardContent>
      </Card>
    </Fade>
  );
};
