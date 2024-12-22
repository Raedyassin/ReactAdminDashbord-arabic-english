import  "./chart.scss";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ModeContext from "../../context/Mode";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
export default function Chart({ height, title }) {
  const {mode} = useContext(ModeContext)
  const { t, i18n } = useTranslation();
  return (
    <div className="chart" dir="ltr">
      <h3 className="title" dir={`${i18n.language==='ar'?"rtl":"ltr"}`}>{ title}</h3>
      <ResponsiveContainer  width="100%" height={height} style={{padding:"0px",margin:"0px",}} >
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="total1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#84d8b1" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#84d8b1" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke={mode==="dark"?"#FEFEFE":"gray"}  />
          <YAxis stroke={mode === "dark" ? "#FEFEFE" : "gray"} />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
          <Area type="monotone" dataKey="Total1" stroke="#84d8b1" fillOpacity={1} fill="url(#total1)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
const data=[
  {name:"January", Total: 1200, Total1:700 } ,
  {name:"February", Total: 2100, Total1:900 } ,
  {name:"March", Total: 800, Total1:600} ,
  {name:"April", Total: 1600, Total1:800} ,
  {name:"May", Total: 900, Total1:1100 } ,
  {name:"June", Total: 1700, Total1:1200} ,
]
