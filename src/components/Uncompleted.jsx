import React from 'react'
import '../App.css';

function Uncompleted(props) {
    const unComp=props.unComp
  return (
    <div className='uncomp'>
      <h2>Uncompleted</h2>
      <ul>
       {
        unComp.map((val)=>{
            return(<li>{val}  <i class="fa-sharp fa-solid fa-xmark"></i></li>)  
         })
       } 
      </ul>
    </div>
  )
}

export default Uncompleted
