import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./AppRouter/AppRouter"
import Header from "./Header/Header"


function App() {
  


    return (
        <div>
            <BrowserRouter>
                <AppRouter/>
                <Header/>
            </BrowserRouter>
        </div>
  )
}

export default App
