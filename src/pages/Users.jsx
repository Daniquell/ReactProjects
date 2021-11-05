import React, { useState,useEffect } from "react";
import UserList from "../components/UserList";
import MyModal from "../components/MyButton/MyModal/MyModal";
import axios from 'axios';
import Loader from 'react-loader-spinner'

const Users=() => {

  const[loading, setLoading]=useState(true);




const fetchUsers=async()=>{
  const users=await axios.get('https://jsonplaceholder.typicode.com/users');
  setUsers(users.data)
  setLoading(false)
}
  useEffect(() => {
    fetchUsers();
   
  },[])



 

  const [users, setUsers]=useState(null);
  const [user, setUser]=useState(
    {
      name:'',
      phone:'',
      email:'',
    }
    );


  const onChange=(e)=>{
    if (e.target.id=="name"){
      setUser({...user, name: e.target.value});
    }
    else if(e.target.id=="email"){
      setUser({...user, email:e.target.value});
    }
    
    else{
      setUser({...user, phone: e.target.value});
    }
    
  };

  const addUser=()=>{
    const id=Math.random()*1
    setUser({...user,id:id})
    setUsers([...users,user]);
    setUser({
      name:'',
      phone:'',
      email:'',
    })
  }

  const removeUser=(id)=>{
    const confirm=window.confirm("Реально удалить?");
    if (confirm) setUsers(users.filter((user)=>user.id!==id))
    
  };

  const clear=()=>{
    setUser({name:'',phone:'',username:'',email:''})
  }

console.log(users);

const [showModal,setShowModal]=useState(false)


  return (
   <div className="App">
     
  
    <div className="container">

    
    
  
  

<button onClick={()=>fetchUsers()}>fetchUsers</button>


      <MyModal visible={showModal} setVisible={setShowModal}>{
    <>
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="name" type="text" class="validate" value={user.name} placeholder="EnterName"
           onChange={onChange}/>
         
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">phone</i>
          <input id="phone" type="tel" class="validate" value={user.phone} placeholder="EnterPhone" onChange={onChange}/>
        </div>
          
        
        <div className="input-field col s6">
          <i className="material-icons prefix">email</i>
          <input id="email" type="email" class="validate" value={user.email} placeholder="EnterEmail" onChange={onChange}/>
        </div>


           <a id="Add" className="waves-effect waves-light btn m-1"
            onClick={()=>addUser()}
            >
            Add</a>
            <a className="waves-effect waves-light right btn m-1"
            onClick={()=>clear()}
          >Cancel</a>
        
        </>} 
           </MyModal>  

            <div className="row m-1">
      <div className="col s4">
        <a className="waves-effect waves-light btn"
        onClick={()=>setShowModal(true)}
        >
          Add user
        </a>
      </div>
      <div className="col s8">
                          
      </div>
    </div>
    {loading? (
    <Loader
      className="center"
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      />
    ):
    (<UserList search deleteUser={removeUser}>
      {users}
    </UserList>
    )}
  </div> </div>
          );
};

export default Users;
