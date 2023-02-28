import React from 'react'
import '../App.css';
 

 function Completed(props) {
    const comp=props.comp
   

  return (
    <div className='comp'>
      <h2>Completed</h2>
      <ul>
      {
        comp.map((obj)=>{
          
            return(<li>{obj}<i class="fa-sharp fa-solid fa-circle-check"></i></li>)  

        })
      }
 
      </ul>
    </div>
  )
}

export default Completed
