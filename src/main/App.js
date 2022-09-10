import './App.css';
import {Sidebar} from '../components/index'
import { Outlet} from "react-router-dom";

function App() {
  return (
    <div className='ml-[32px] mr-[23px] my-[35px] flex flex-row space-x-[43px] '>
       <Sidebar />

       <Outlet />


    </div>
  );
}

export default App;
