export const Task=(props)=>{
    
    return  <div className="tasks">
    <h1 style={{color: props.complete ? 'green' : 'red'}}>{props.taskName}</h1>
<div className="btn">
    <button onClick={()=>props.complete_task(props.id)} className="inner_btn">Mark Complete</button>
    <button onClick={()=>{props.delete_task(props.id)}} className="inner_btn1">X</button>

    </div>
    </div> ;
}

