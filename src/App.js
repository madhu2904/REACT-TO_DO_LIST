
import './App.css';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Task} from "./Task.js" ;

function App() {
  // const id=useId();
 
  const [to_do_list,setTodoList]=useState([])
  const [newTask,setNewTask]=useState("")

  // to create a listener of input task
  const handle_new_task=(event)=>{
      setNewTask(event.target.value);
      
  }

  
  const add_task=()=>{
    const task={
      id: uuidv4(),
      taskName: newTask,
      complete:false
    };
    setTodoList([...to_do_list,task]);
    
  
    }

const complete_task=(id)=>
  {
    const newList=to_do_list.map((task)=>
    {
      return id === task.id ? {...task,complete:true} : task;
    })
    setTodoList(newList);
    
  }

  const delete_task=(id)=>
    {
      const newList=to_do_list.filter((task)=>
      {
        return id !== task.id
      });
      setTodoList(newList);
    }

  return  (
    <div className="App">
      <div className="heading">
        <h1 className="h1">Your Personal Quest Log.</h1>
        <h2>Planning your day is the best way to start it!</h2>
      </div>
     <div className="add_task">
      {/* new task input box  */}
      <input className="ip_box" onChange={handle_new_task}/>

      <button className="ip_btn" onClick={add_task}>Add Task</button>
     </div>

     <div className='task_list'>
      {
      to_do_list.map((task,key)=>
        {
               return <Task key={task.id} id={task.id} taskName={task.taskName}  delete_task={delete_task} complete_task={complete_task} complete={task.complete}/>
        })
      }
     </div>
    </div>
  );
}

export default App;



