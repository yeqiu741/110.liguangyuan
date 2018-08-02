import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import App from '../App'
import Op from '../container/Op'
import ClassDetails from '../container/ClassDetails'
import StudentMessage from '../container/StudentMessage'

const Routes = ()=>{
    return(
        <Router  history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Op} />>
            </Route>
            <Route path="Op" component={Op} />
            <Route path="classdetails" component={ClassDetails} />
            <Route path="studentmessage" component={StudentMessage} />

        </Router>
    )
}

export default Routes