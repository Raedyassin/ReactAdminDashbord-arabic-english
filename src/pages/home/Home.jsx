// import Sidebar from "../../components/sidebar/Sidebar"
// import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"
import { useTranslation } from "react-i18next"
import { styled } from "@mui/material"
export default function Home() {
  const { t } = useTranslation();
  return (
    // <div className="home">
    //   <Sidebar />
      <div className="homeContainer">
        {/* <Navbar/> */}
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart height={440} title={`${t('home.chart.title')}`} />
        </div>
        <div className="listContainer">
        <h3 className="listTitle">{t("home.title") }</h3>
          <Table/>
        </div>
      </div>
    // </div>
  )
}

