import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import Ceil from '../Ceil/Ceil'



const winningCombos=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


export default function Home() {
  
const[Ceils,setCeils]=useState(['','','','','','','','',''])
const[go,setgo]= useState('circle')
const[winningMessage, setwinningMessage]=useState('')
useEffect(()=>{
winningCombos.forEach((combo)=>{
  const circleWins=combo.every((Ceil)=>Ceils[Ceil]==="circle")
  const crossWins=combo.every((Ceil)=>Ceils[Ceil]==="cross")
  if(circleWins){
setwinningMessage("circle wins")
  }else if(crossWins){
setwinningMessage("cross wins")
  }

})
},[Ceils,winningMessage])
useEffect(()=>{
 if( Ceils.every((Ceil)=>Ceil!=="")&& !winningMessage){
  setwinningMessage("Draw!")
 } 

},[Ceils,winningMessage])

console.log(Ceils)
  return (
    <>
    <div><h2 className={`${styles.title}`}> Lets Play </h2></div>
    <div className={`${styles.container}`}>
<div className={`${styles.gamebored}`}>
{Ceils.map((ceil,index)=>(
<Ceil 
key={index}
 id={index} 
 ceil={ceil} 
  go={go} 
  setgo={setgo}
   ceils={Ceils} 
   setCeils={setCeils}
   winningMessage={winningMessage}
   />
))}
</div>
{winningMessage?<div  className={`${styles.word}`}>  {<button>{winningMessage}</button>}  </div>:!winningMessage && <div className={`${styles.word}`}  > {`it's ${go} tern `}</div>}
{}
</div>
</>
  );
}
