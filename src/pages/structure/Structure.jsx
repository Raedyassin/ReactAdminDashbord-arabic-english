import "./structure.scss";
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { Outlet } from "react-router-dom";
export default function Structure() {
  return (
  <div className="structue" >
      <Sidebar />
      <Navbar /> 
      <div className="structerContainer">
        <Outlet/>
      </div>
    </div>
  )
}
