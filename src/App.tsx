import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Tooltip } from "react-tooltip"
import { Toaster } from "sonner"

import Home from "./pages/Home/Home"

import Header from "./components/Header/Header"

function App() {
  return (
    <>
      <Tooltip id='tooltip' />
      <Toaster richColors />
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
