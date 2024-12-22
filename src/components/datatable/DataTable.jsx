import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

import { userColumns ,userRows   }from '../../dataTableSource'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ModeContext from "../../context/Mode";
import { useTranslation } from "react-i18next";

const paginationModel = { page: 0, pageSize: 9 };

export default function DataTable() {
  const actionColumn = [
    {
      fild: "actions",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={'/users/test'}>
              <button className="viewButton">{t('database.viewButton') }</button>
            </Link>
            <button onClick={() => DelteRow(params.row.id)} className="deleteButton">{t('database.deteteButton') }</button>
          </div>
        )
      }
    }
  ]
  const [row,setRow]=useState(userRows)
  function DelteRow(id) {
    console
    setRow(row.filter(ele=> ele.id !== id));
  }
  const { mode } = useContext(ModeContext)
  console.log("mode", mode)
  const { t } = useTranslation();
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        <Link className="logo" to={'/users/new'} style={{textDecoration:"none"}}>
        <span > {t("database.addButton")} </span>
        </Link>
      </div>
      <Paper className="table" >
        <DataGrid
          className="dataTAble"
          sx={{
            border:0 ,
          }}
          rows={row}
          columns={[...userColumns,...actionColumn]}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Paper>  
    </div>
  )
}
