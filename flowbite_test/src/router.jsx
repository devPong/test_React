import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import TestFlowbit from "./pages/test01.jsx";
import Test02 from "./pages/test02.jsx";


export default function RouterApp() {
    return (
        <BrowserRouter>
        
            <Routes>
                
                    <Route path="/" element={<Home />} />
                    <Route path="/t" element={<TestFlowbit />} />
                    <Route path="/t2" element={<Test02 />} />
                   
               
            </Routes>
        </BrowserRouter>
    );
}       