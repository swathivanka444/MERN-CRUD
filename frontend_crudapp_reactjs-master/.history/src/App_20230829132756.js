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
import EditTask from './component/EditTask';
import ViewTask from './component/ViewTask';

function App() {
  return (
 <>
<BrowserRouter>
<Navbar/>
<Routes>
    <Route path='/' element={<AllTasks/>}/> 
    <Route path='/AddTask' element={<AddTask/>}/>
    <Route path='/EditTask/:id' element={<EditTask />}/>
    <Route path='/ViewTask/:id' element={<ViewTask />}/>    
</Routes>
</BrowserRouter> 
 </>
  );
}

export default App;
