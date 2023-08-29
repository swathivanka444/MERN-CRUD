import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";



import AllTasks from "./component/AllTasks";

 

function App() {

  return (

    <div className="App">

      <Router>

 

 

        <Routes>



          <Route exact path="/" element={<AllTasks />} />


        </Routes>

  

      </Router>

    </div>

  );

}

 

export default App;