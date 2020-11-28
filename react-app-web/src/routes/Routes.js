import React from "react"
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import {Home} from '../pages/Home'
import {PrivateHome} from '../pages/PrivateHome'
import PrivateRoute from "./Private.Routes"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <PrivateRoute path="/chat" component={PrivateHome}></PrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
