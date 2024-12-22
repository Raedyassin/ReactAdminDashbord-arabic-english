import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import  "./featured.scss";
import { useTranslation } from "react-i18next";

export default function Featured() {
  const { t } = useTranslation();
  return(
    <div className="featured">
      <div className="top">
        <h3 className="title">{t("home.feature.totalRev") }</h3>
        <MoreVert fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={`${70}%`} strokeWidth={4} />
        </div>
        <p className="title">{t("home.feature.totalSales") }</p>
        <p className="amount">$420</p>
        <p className="desc">
          {t("home.feature.desc")}
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">{t("home.feature.target") }</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle ">{t("home.feature.lw") }</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">{t("home.feature.lm") } </div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
