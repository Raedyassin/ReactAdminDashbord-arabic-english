import { useState } from 'react'
import './new.scss'
import { DriveFolderUpload } from '@mui/icons-material'
import { useTranslation } from 'react-i18next';
export default function New({ inputs, title }) {
  const [file, setFile] = useState("")
  console.log(file);
  const { t } = useTranslation();
  return (
    <div className='newContainer'>
      <div className="top">
        <h2>{title}</h2>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={file? URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="NO Image" />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="ImageIcon" className='imageIcon'>{t("new.chooseImage")}: <DriveFolderUpload className='icon'/></label>
              <input id='ImageIcon'
                type="file"
                className='imageInput'
                onChange={(e)=>setFile(e.target.files[0])}
              />
            </div>
            {
              inputs.map((element) => {
                return (
                  <div key={element.id} className="formInput">
                    <label htmlFor={`${element.id}`}>{element.label}</label>
                    <input id={`${element.id}`} type={element.type} placeholder={element.placeholder} />
                  </div>
                )
              })
            }
            <button onClick={(e) => { e.preventDefault(); }}>{t("new.send") }</button>
          </form>
        </div>
      </div>
    </div>
  )
}
