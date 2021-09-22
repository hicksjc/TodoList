import React from 'react';
import 'semantic-ui-css/semantic.css';
import {Header, Container, Button, Grid, List} from 'semantic-ui-react';
import Task from '../componenets/Task';
import NewTaskForm from '../componenets/NewTaskForm';
const HomePage = () => {

  const initialNewTask = {
    name: '',
    color: '',
  };

  const [newTaskOpen, setNewTaskOpen] = React.useState(true);


  // Assigning a varaible and setter to be used for later when a condition is true.
  const [newTask, setNewTask] = React.useState({
    name: '',
    color: '',
  });

  const [list, setList] = React.useState([]);

  function openNewTask() {
    setNewTaskOpen(true);
  }

  function closeNewTask(){
    setNewTaskOpen(false);
  }

  function addNewTask() {
    const listClone = [...list];
    listClone.push(newTask);
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
  }
  
  // const taskList = [];

  // list.forEach((task, index) => {
  //   taskList.push(
  //     <Task key={`${task.name}-${index}`} name={task.name} color={task.color}/>
  //   ) 
  // });
  function editTask(index) {
    console.log('edit', index);
    const newList = list.map((task, i) =>{
      if(i !== index) return task;
      return {
        name: `Edit ${task.name}`,
        color: task.color,
      }
    })
    setList(newList);
  }


  function deleteTask() {
    // Array.filter
  }

  const taskList = list.map((task, index) => {
    return (<Task 
              key={`${task.name}-${index}`} 
              name={task.name} 
              color={task.color}
              editTask={editTask}
              index={index}
            />
    );
  });

  
  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid.Column width='4'>
            <Button icon='bars'></Button>
          </Grid.Column>
          <Grid.Column width='8'>
            <Header as='h1' textAlign='center'>Todo List</Header>
          </Grid.Column>
          <Grid.Column textAlign='right' width='4'>
            <Button icon='plus' color='green' onClick={openNewTask}></Button>
          </Grid.Column>
        </Grid>

        {/* Ternary Operator is another way to write an if statement */}
        {/* {true ? "true" : "false"} */}
        {newTaskOpen ? (
          <NewTaskForm closeNewTask={closeNewTask} 
          newTask={newTask}
          setNewTask = {setNewTask}
          addNewTask={addNewTask}/>
        ) : null}


        <List>
            {taskList}
        </List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;