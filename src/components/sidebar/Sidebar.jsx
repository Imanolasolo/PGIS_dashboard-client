import "./Sidebar.scss"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">GPSIS.</span>
                <span className="logo2">By:IT4PROS.</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardOutlinedIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTAS</p>
                    <li>
                        <PersonOutlinedIcon className="icon"/>
                        <span>Reclamantes</span>
                    </li>
                    <li>
                        <MedicalServicesIcon className="icon"/>
                        <span>Servicios</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Ajustes</span>
                    </li>
                    <p className="title">OTHER</p>
                    <li>
                        <LogoutOutlinedIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        
        </div>
    )
}

export default Sidebar