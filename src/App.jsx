import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Tracker from "./pages/Tracker"
import { useContext } from "react"
import AppContext from "./context/AppContext"


function App() {

  const {Val , setVal} = useContext(AppContext)

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={ Val? <Navigate to={'/tracker'}/> : <Home/> }/>
    <Route path="/tracker" element={<Tracker/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
