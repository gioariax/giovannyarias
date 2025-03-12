import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import CV from "../pages/cv/CV"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} /> 
      </Routes>
    </>
  )
}