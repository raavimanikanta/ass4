import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Student from "./components/Student"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

const App =() => {
    return(
        <div className="background">
        
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/student" element={<Student />} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            
        </Router>
        </div>
    )

}
export default App