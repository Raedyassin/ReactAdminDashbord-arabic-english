import { AccountBalanceOutlined, Directions, KeyboardArrowUp, MonetizationOnOutlined, PersonOutline, ShoppingCartOutlined } from "@mui/icons-material"
import "./widget.scss"
import { useTranslation } from 'react-i18next';

export default function Widget({ type }) {
  const { t } = useTranslation();
  let data;
  //temporary
  const amount = 100
  const diff =20
  switch (type) {
    case 'user':
      data = {
        title: t("home.widget.user"),
        isMoney: false,
        link: t("home.widget.user-link"),
        icon: <PersonOutline className="icon" style={{
          color: 'crimson',
          backgroundColor: 'rgba(255,0,0,0.2)',
          fontSize:"30px"
        }} />
      }
      break;
    case 'order':
      data = {
        title: t("home.widget.orders"),
        isMoney: false,
        link: t("home.widget.orders-link"),
        icon: <ShoppingCartOutlined className="icon" style={{
          color: 'goldenrod',
          backgroundColor: 'rgba(218,165,32,0.2)',
          fontSize:"30px"
        }} />
      }
      break;
    case 'earning':
      data = {
        title: t("home.widget.earning"),
        isMoney: true,
        link: t("home.widget.earning-link"),
        icon: <MonetizationOnOutlined className="icon" style={{
          color: 'green',
          backgroundColor: 'rgba(0,128,0,0.2)',
          fontSize:"30px"
        }} />
      }
      break;
    case 'balance':
      data = {
        title: t("home.widget.balance"),
        isMoney: true,
        link: t("home.widget.balance-link"),
        icon: <AccountBalanceOutlined className="icon" style={{
          color: 'purple',
          backgroundColor: 'rgba(128,0,128,0.2)',
          fontSize:"30px"
        }} />
      }
      break;
    default:
      data = {};
  }
  return (
    <div className="widget" >
      <div className="left">
        <span className="title">{ data.title }</span>
        <span className="counter">{data.isMoney && "$"} { amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive" style={{direction:"ltr"}}>
          <KeyboardArrowUp />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
)}
