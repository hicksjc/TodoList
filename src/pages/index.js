import React from 'react';
import 'semantic-ui-css/semantic.css';
import {Header, Container, Button, Grid, List} from 'semantic-ui-react';
import Task from '../componenets/Task';
import NewTaskForm from '../componenets/NewTaskForm';
import EditTaskForm from '../componenets/editTask';

const HomePage = () => {

  const initialNewTask = {
    name: '',
    color: '',
    description: ''
  };

  const [newTaskOpen, setNewTaskOpen] = React.useState(true);
  


  // Assigning a varaible and setter to be used for later when a condition is true.
  const [newTask, setNewTask] = React.useState({
    name: '',
    color: '',
    description: ''
  });

  const [list, setList] = React.useState([]);

  function openNewTask() {
    setNewTaskOpen(true);
  }

  function closeNewTask(){
    setNewTaskOpen(false);
  }

const listClone = [...list];

  function addNewTask() {
    
    listClone.push(newTask);
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
  }

  //State tp know if we are editing

  const [openEditForm, setEditForm] = React.useState(false);

  const [currentTodo, setCurrentTodo] = React.useState({});



  function openEditTaskForm(currentTask) {
    setEditForm(true);
    setCurrentTodo(currentTask);
  }
  function closeEditTaskForm() {
    setEditForm(false);
    setCurrentTodo({});
  }

  //get the value of the edit input and set the new state
  function editCurrentTask(e) {
    //set the neew state value to what's currently in the edit input box
    
    console.log(currentTodo);
    const newList = list.map((task, i) => {
      // return tasks that we're not updating
      if(i !== currentTodo.index) {
        return task;
      }
      // return the updated task
      else {
        return currentTodo;
      }
    })
    setList(newList);
    closeEditTaskForm();
  }

  function deleteTask(index){
    //Array.filter
   const  getridof = list.filter((name, i) => {
     // return true for elements we want to keep
    return i !== index;
   });
   console.log(getridof);
   setList(getridof);
  }

  const taskList = list.map((task, index) => {
    return (<Task 
              key={`${task.name}-${index}`} 
              name={task.name} 
              color={task.color}
              description={task.description}
              editCurrentTask={editCurrentTask}
              index={index}
              openEditTaskForm={openEditTaskForm}
              deleteTask= {deleteTask}
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

        {openEditForm ? (
          <EditTaskForm
          closeEditTaskForm={closeEditTaskForm}
          setCurrentTodo={setCurrentTodo}
          currentTodo={currentTodo}
          editCurrentTask={editCurrentTask}
          />
        ): null}


        <List>
            {taskList}
        </List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;