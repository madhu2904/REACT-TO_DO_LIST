
import './App.css';
import {useState} from 'react'

function App() {
  const [to_do_list,setTodoList]=useState([])
  const [newTask,setNewTask]=useState("")

  // to create a listener of input task
  const handle_new_task=(event)=>{
      setNewTask(event.target.value);
  }

  const add_task=()=>{
    setTodoList([...to_do_list,newTask])
  }

  const delete_task=(taskName)=>
    {
      const newList=to_do_list.filter((task)=>
      {
        return taskName !== task
      });
      setTodoList(newList);
    }

  return (
    <div className="App">
     <div className="add_task">
      {/* new task input box  */}
      <input onChange={handle_new_task}/>
      <button onClick={add_task}>Add Task</button>
     </div>

     <div className='task_list'>
      {
      to_do_list.map((task,key)=>
        {
               return <div>
                <h1>{task}</h1><button onClick={
                   ()=>
                   {
                     setTodoList([to_do_list.filter((innertask) => {return innertask !== task})])
                   }
                  // ()=>delete_task(task)
                }
                  >remove/done</button>
                </div>;
      })
      }
     </div>
    </div>
  );
}

export default App;



