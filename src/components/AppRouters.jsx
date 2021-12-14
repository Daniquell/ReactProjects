import React, { useContext } from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'
import Users from '../pages/Users'
import Devices from '../pages/Devices'
import Loader from 'react-loader-spinner'
import Posts from '../pages/Posts'
import logandpass from '../pages/logandpass'
import AuthContext from '../context'

const AppRouters=()=>{
    const {isAuth}=useContext(AuthContext);
    return (
        isAuth
        ?
        <Switch>
            <Route path='/posts' component={Posts}/>
            <Route exact path='/users' component={Users}/>
            <Route path='/devices' component={Devices}/>
            <Redirect to="/devices"/>
        </Switch> 
        :
        <Switch>
            <Route path='/logandpass' component={logandpass}/>
            <Redirect to="/logandpass"/>
        </Switch>
    )

       
    
}

export default AppRouters;