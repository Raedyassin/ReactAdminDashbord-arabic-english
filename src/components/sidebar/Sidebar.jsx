import   './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import ModeContext from '../../context/Mode';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
export default function Sidebar() {
  const { setMode } = useContext(ModeContext)
  const { t } = useTranslation();
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to={'/'} style={{textDecoration:"none"}}>
          <span className="logo"> {t('sidebar.logo')} </span>
          {/* <span className="logo"> Dashboard </span> */}
        </Link>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          <p className="title">{t("sidebar.center.main") }</p>
          <Link to={'/'} style={{textDecoration:"none"}}>
            <li>
            <DashboardIcon className='icon'/>
              <span>{ t('sidebar.logo') }</span>
          </li>
          </Link>
          <p className="title">{t('sidebar.center.list') }</p>
          <Link to={'/users'} style={{textDecoration:"none"}}>
            <li>
              <GroupAddOutlinedIcon className='icon'/>
              <span>{t('sidebar.center.users')}</span>
            </li>
          </Link>
          <Link to={'/products/new'} style={{textDecoration:"none"}}>
            <li>
              <MapsHomeWorkOutlinedIcon className='icon'/>
              <span>{t('sidebar.center.products')}</span>
            </li>
          </Link>
          <li>
            <Inventory2OutlinedIcon className='icon'/>
            <span>{t('sidebar.center.orders')}</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon'/>
            <span>{t('sidebar.center.delivery')}</span>
          </li>
          <p className="title">{t('sidebar.center.useful') }</p>
          <li>
            <EqualizerOutlinedIcon className='icon'/>
            <span>{t('sidebar.center.stats')  }</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <span>{ t('sidebar.center.notifications')}</span>
          </li>
          <p className="title">{ t('sidebar.center.service')}</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon'/>
            <span>{t('sidebar.center.SystemHealth') }</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon'/>
            <span>{t('sidebar.center.logs') }</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon'/>
            <span>{t('sidebar.center.setting') }</span>
          </li>
        </ul>
      </div>
      {/* <hr /> */}
      <div className="bottom">
        <ul>
          <p className="title">{t('sidebar.center.user') }</p>
          <li>
            <AccountCircleOutlinedIcon className='icon'/>
            <span>{t('sidebar.center.profile') }</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon'/>
            <span>{t('sidebar.center.logout') }</span>
          </li>
        </ul>
        <div className="bottomOfBottom">
          <div onClick={()=>setMode('dark')} className="colorOptions"></div>
          <div onClick={()=>setMode('light')} className="colorOptions"></div>
        </div>
      </div>
    </div>
  )
}
