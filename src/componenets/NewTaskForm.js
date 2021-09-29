import React from "react";
import {Segment, Header, Form, Select, Button, Input} from 'semantic-ui-react';

const NewTaskForm = ({closeNewTask, newTask, setNewTask, addNewTask}) => {

  function changeNewTask(e, {value, name}) {
    const newTaskClone = {...newTask};
    newTaskClone[name] = value;
    setNewTask(newTaskClone);
    // console.log(name, value);
  }
    return (
        <React.Fragment>
        <Segment>
          <Header as='h2'>New Task</Header>
          <Form>
            <Form.Field
            control={Input}
            label='Task Name'
            placeholder='Enter task name...'
            value={newTask.name}
            onChange={changeNewTask}
            name='name'            />
            <Form.Field
            control={Input}
            label='Task Description'
            placeholder='Enter task Description'
            name='description'
            value={newTask.description}
            onChange={changeNewTask}
            />
            <Form.Field
            control={Select}
            label='Task Color'
            placeholder='Choose task color...'
            options={[
              {text: 'Red', value: 'red'},
              {text: 'Yellow', value: 'yellow'},
              {text: 'Green', value: 'green'},
            ]}
            value={newTask.color}
            onChange={changeNewTask}
              name='color'/>
            <Button.Group fluid>
              <Button type='button' color='red' onClick={closeNewTask}>Cancel</Button>
              <Button.Or/>
              <Button type='button' color='green' onClick={addNewTask}>Add Task</Button>
            </Button.Group>
            
          </Form>
        </Segment>
    </React.Fragment>
    )
}

export default NewTaskForm;