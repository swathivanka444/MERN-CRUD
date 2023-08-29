  import './App.css';
  import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route,
    Link,
    BrowserRouter,
  } from "react-router-dom";
import AllTasks from './component/AllTasks';
import Navbar from './component/Navbar';
import AddTask from './component/AddTask';

function App() {
  return (
 <>
<BrowserRouter>
<Navbar/>
<Routes>
    <Route path='/' element={<AllTasks/>}/> 
    <Route path='/AddTask' element={<AddTask/>}/> 
</Routes>
</BrowserRouter> 
 </>
  );
}

export default App;
