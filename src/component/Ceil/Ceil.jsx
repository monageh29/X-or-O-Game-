import React from 'react'
import style from '../Ceil/Ceil.module.css'
export default function Ceil({go,setgo,id,ceils,setCeils,ceil ,winningMessage}) {
  const handleCeilChange=(cellToChange)=>{
    let copyCeils=[...ceils]
    copyCeils[id]=cellToChange
    setCeils(copyCeils)
     }
  const handleClick=()=>{
    if(winningMessage) return
    const notTaken=!ceils[id]
    if(notTaken){
      if(go==="circle"){
      
       handleCeilChange("circle")
       setgo("cross")

      }else if(go==="cross"){
    
        handleCeilChange("cross")
        setgo("circle")
      }
    }
   
  }

  return (
    <>
<div className={`${style.squire}`  }onClick={handleClick} >
<div >{ceil? (ceil==="circle"?<div className={`${style.circle}`}> </div>  :<div className={`${style.cross}`}> X</div>):""}</div>
</div>

</>
  )
}


























// const ceil=({go,setgo,id,ceils,setCeils})=>{
// const handleClick =(e)=>{
//   
// if(notTaken){
//  
//    
//     setgo("cross")
// }else if(go==="cross"){
 
//     handleCeilChange("cross")
//     setgo("circle")
  
// }
// 
// }


// }
// }
// return 
 
  
// }




