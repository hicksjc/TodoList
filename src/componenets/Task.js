import React from "react";
import {List, Grid, Label, Button} from 'semantic-ui-react';

const Task = ({ name, color, description, editTask, index, deleteTask, openEditTaskForm }) =>{
    function deleteCurrentTask(){
      deleteTask(index);
    }

    function editCurrentTask() {
      openEditTaskForm({
        index,
        name,
        color,
        description
      })
    }
    return(
        <React.Fragment>
            <List.Item>
            <Grid columns='2'>
              <Grid.Column>
                <Label color={color} size='big'>
                  {name}
                  <List.Description>{description}</List.Description>
                </Label>
                </Grid.Column>
              <Grid.Column textAlign='right'>
                <Button icon="trash" color='red' onClick={deleteCurrentTask}></Button>
            <Button icon='pencil' color='orange' onClick={editCurrentTask}></Button>
              </Grid.Column>
            </Grid>
          </List.Item>
        </React.Fragment>
    );
};

export default Task;