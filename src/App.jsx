// Desc: This is the main app file
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import  Home  from "./components/home"


function App() {

  //setup react router for the different pages

  return (
    <>
<Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App
