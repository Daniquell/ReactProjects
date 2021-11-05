import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Users from '../pages/Users'
import Devices from '../pages/Devices'
import Loader from 'react-loader-spinner'
import Posts from '../pages/Posts'

const AppRouters=()=>{
    
    return(
        <Switch>
            <Route path='/posts' component={Posts}/>
            <Route path='/users' component={Users}/>
            <Route path='/devices' component={Devices}/>
        </Switch>
    )
}

export default AppRouters;