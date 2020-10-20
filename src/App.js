import React from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import PostsPage from './pages/PostsPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PostsPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
