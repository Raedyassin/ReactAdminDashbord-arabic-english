import Home from "./pages/home/Home"
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import NotFound from './pages/notFound/NotFound'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Structure from "./pages/structure/Structure"
import { productInputs, userInputs } from "./formSource"
import './style/dark.scss'
import ModeContext from "./context/Mode"
import { useState } from "react"
import { useTranslation } from 'react-i18next';
function App() {
  const { t,i18n } = useTranslation();
  
  const [mode, setMode] = useState("light");
  return (
    <ModeContext.Provider value={{mode,setMode}}>
      <div className={mode} dir={`${i18n.language==="ar"?"rtl":"ltr"}`}>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Structure/>}>
              <Route index  element={<Home/>} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New inputs={userInputs(t)} title={t("app.userTitle")} />} />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New inputs={productInputs(t)} title={t("app.productTitle")} />} />
              </Route>
            </Route>
            <Route path="*" element={ <NotFound/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ModeContext.Provider>
  )
}

export default App
