import React from 'react';
import {Segment, Header, Form, Select, Button, Input} from 'semantic-ui-react';

const EditTaskForm = ({closeEditTaskForm, editCurrentTask, currentTodo, setCurrentTodo}) => {

    function changeEdits(e, {value, name}) {
        // const EditTaskClone = {...index};
        // EditTaskClone[name] = value;
        setCurrentTodo({...currentTodo, [name]: value});
    }

    console.log(currentTodo);

    return (<React.Fragment>
        <Segment>
          <Header as='h2'>Edit Task</Header>
          <Form>
            <Form.Field
            control={Input}
            label='Task Name'
            placeholder='Enter task name...'
            value={currentTodo.name}
            onChange={changeEdits}
            name='name'            />
            <Form.Field
            control={Input}
            label='Task Description'
            placeholder='Enter task Description'
            name='description'
            value={currentTodo.description}
            onChange={changeEdits}
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
            value={currentTodo.color}
            onChange={changeEdits}
              name='color'/>
            <Button.Group fluid>
              <Button type='button' color='red' onClick={closeEditTaskForm}>Cancel</Button>
              <Button.Or/>
              <Button type='submit' color='green' onClick={() => editCurrentTask(currentTodo)}>Submit Edits</Button>
            </Button.Group>
            
          </Form>
        </Segment>
    </React.Fragment>)
}

export default EditTaskForm;