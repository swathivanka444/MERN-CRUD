import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AllTasks from './component/AllTasks';
import Navbar from './component/Navbar';
import AddTask from './component/AddTask';
import EditTask from './component/EditTask';
import ViewTask from './component/ViewTask';
import Login from './component/Login';
import Signup from './component/Signup';
function App() {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<AllTasks />} />
          <Route path='/AddTask' element={<AddTask />} />
          <Route path='/EditTask/:taskId' element={<EditTask />} />
          <Route path='/ViewTask/:taskId' element={<ViewTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
