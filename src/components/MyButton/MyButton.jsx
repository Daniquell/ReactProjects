import React,{useState} from "react";
import './MyButton.css'


const MyButton=(props)=>{
    const[value,setValue]=useState('default value')
    return(
    <>
    
    <div>{value}</div>
     <button onClick={()=>setValue('change value')} className={props.className}> 
        {props.children}
    </button>
    </>


    )
}


export default MyButton;


