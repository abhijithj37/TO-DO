
import '../App.css';
import React from 'react'
import { useState } from 'react'

import Completed from './Completed';
import Uncompleted from './Uncompleted';

 
export default function ToDo(){
  const [todo,setTodo]=useState('')
  const [todos,setTodos]=useState([])
  const [comp,setComp]=useState([])
  const [unComp,setUncomp]=useState([])

 

  const handleAddTodo=()=>{
    if(todo.trim()!==""){
      const exist=todos.find((obj)=>obj.text===todo.trim())
      if(!exist){
        setTodos([...todos,{text:todo,status:false,id:Date.now()}])
        setTodo("")
      }
    }
  }
  const currentDate=new Date().toDateString()

  return (
    <main> 
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br/>
      <h2>My Day 🌝.... </h2><br/>
      <p>{currentDate},</p>
    </div>
    <div className="input">
      <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={handleAddTodo} className="fas fa-plus"></i>
    </div>
    <div className="todos">

      {
        todos.map((obj)=>{
          return( 
          <div className="todo">
        <div className="left">
          <input onChange={(e)=>setTodos(todos.filter((obj2=>{
            if(obj.id===obj2.id){
              obj.status=e.target.checked
            }
            return obj2
          })))} type="checkbox" checked={obj.status} name="" id="" />

          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i onClick={()=>{
            setTodos(todos.filter((ob)=>ob.id!==obj.id))
            if(obj.status){
              setComp([...comp,obj.text])
            }else{
              setUncomp([...unComp, obj.text])
            }
          }} className="fas fa-times"></i>
        </div>
        
        
      </div>
      
          )
          
          
        })
      
      }
      {
        todos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)  
          }
        return null
        })
      }
      
       
    </div>
    <div>
      
    </div>
  </div>
{comp.length?<Completed comp={comp}/>:null}
 {unComp.length?<Uncompleted unComp={unComp}/>:null}  
   
  </main>
  
  )
  
}


