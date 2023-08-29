  import './App.css';
  import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import AllTasks from './component/AllTasks';
import Navbar from './component/Navbar';

function App() {
  return (
 <>
<Navbar/>
<AllTasks/>
 </>
  );
}

export default App;
