import  './single.scss'
import Chart from '../../components/chart/Chart'
import List from '../list/List'
import { useTranslation } from 'react-i18next'
// import Table from '../../components/table/Table'
export default function Single() {
  const { t } = useTranslation();
  return (
    <div className='singleContainer'>
      <div className="top">
        <div className="left">
          <div className="topOfTop">
            <h3 className="title">{t("single.information") }</h3>
            <div className="editButton">{t("single.edit") }</div>
          </div>
          <div className="item">
            <img className="itemImage" src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="image" />
            <div className="details">
              <h3 className="ittlemName">Jane Doe</h3>
              <div className="detailitem" >
                <span className="itemKey">{t('single.email')}: </span>
                <span className="itemValue">janedoe@gmail.com</span>
              </div>
              <div className="detailitem">
                <span className="itemKey">{t("single.phone")}: </span>
                <span className="itemValue">+20 1055 6666 7777</span>
              </div>
              <div className="detailitem">
                <span className="itemKey">{t("single.address")}: </span>
                <span className="itemValue">Lorem ipsum dolor sit amet consectetur.</span>
              </div>
              <div className="detailitem">
                <span className="itemKey">{t("single.country")}: </span>
                <span className="itemValue">Egypt</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart height={215} title={t("single.chartTitle")} />
        </div>
      </div>
      <div className="bottom">
        <h3 className="title">{t("single.lastTrans")}</h3>
        <List/>
      </div>
    </div>
  )
}
