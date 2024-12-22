import "./navbar.scss";
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useContext } from "react";
import ModeContext from "../../context/Mode";
import { LightModeOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const { mode, setMode } = useContext(ModeContext);
  async function fullScreen() {
    if (!document.fullscreenElement) {
      try {  
        document.documentElement.requestFullscreen()
      } catch (err) {
        console.error(`Error attempting to enter fullscreen: ${err.message}`)
      }
    } else {
      try {  
        document.exitFullscreen()
      } catch (err) {
        console.error(`Error attempting to enter fullscreen: ${err.message}`)
      }
    }
  }
  const { t,i18n } = useTranslation();
  console.log(i18n);
  
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder={`${t("navbar.search")}...`} />
          <TravelExploreOutlinedIcon className="searchIcon"/>
        </div>
        <div className="items">
          <div className="item"
            onChange={(e)=>i18n.changeLanguage( e.target.value)}
          >
            <LanguageOutlinedIcon className="icon" />
            <select name="langSelect" defaultValue="en" id="langSelectID">
              <option value="en">{t("navbar.english") }</option>
              <option value="ar">{t("navbar.arabic") }</option>
            </select>
          </div>
          <div  className="item">
            {
              mode === 'light' ? <DarkModeOutlinedIcon onClick={()=>setMode("dark")} className="icon" />:<LightModeOutlined onClick={()=>setMode("light")} className="icon"/>
            }
          </div>
          <div className="item" onClick={fullScreen}>
            <FullscreenExitOutlinedIcon  className="icon" />
          </div>
          <div className="item">
            <div className="counter"><span>1</span></div>
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <div className="counter"><span>2</span></div>
            <ChatBubbleOutlineOutlinedIcon className="icon" />
          </div>
          <div className="item ">
            <img src="../../../public/download (1).jpeg"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="item potoImage">
            <ReorderOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
