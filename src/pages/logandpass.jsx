import React, { useContext,useState } from "react";
import AuthContext from '../context'

const Logandpass=()=>{
    
    const[error,setError]=useState('');
const loginData={login:'Danila',pass:'2212'}
const[inputData,setInputData]=useState({
    login:'',
    pass:'',
})
const onChange=(e)=>{
    const field={}
    field[e.target.id]=e.target.value
    setInputData((data)=>({...inputData,...field}))
    setError('')
}
const login=()=>{
    if(loginData.login===inputData.login&&loginData.pass===inputData.pass){
        localStorage.setItem('auth','true')
        setIsAuth(true)
    }
    setError('Wrong data')
}

const {isAuth,setIsAuth}=useContext(AuthContext);




    return (
        <form className="container">
            <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input onChange={onChange} id="login" type="text" className="validate"/>
                </div>
            
            <div className="input-field col s6">
                    <i className="material-icons prefix">phone</i>
            <input onChange={onChange} id="pass" type="password" className="validate"/><i class="material-icons left">cloud</i>
                      </div>
            </div>
            {error&&<h5 className="red-text text-darken-4">{error}</h5>}
            <a onClick={()=>login()} class="waves-effect waves-light bt" ><i class="material-icons prefix">cloud</i>button</a>
        </form>
         
       
    )
     

}

export default Logandpass