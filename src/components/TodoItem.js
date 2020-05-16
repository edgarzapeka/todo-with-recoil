import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

export const TodoItem = ({ text }) => {
  return (
    <Fade in={true}>
      <Card raised className="todo-item">
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
      </Card>
    </Fade>
  );
};
