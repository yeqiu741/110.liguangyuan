import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import App from '../App'
import Op from '../container/Op'
import ClassDetails from '../container/ClassDetails'
import StudentMessage from '../container/StudentMessage'

const Routes = ()=>{
    return(
        <Router  history={browserHistory}>
            <Route path="Op/:mid" component={Op} ><IndexRoute component={StudentMessage} /></Route>
            <Route path="classdetails" component={ClassDetails} />
            <Route path="/" component={StudentMessage} />

        </Router>
    )
}

export default Routes