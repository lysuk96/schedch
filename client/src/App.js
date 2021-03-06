import React from "react";
import { useNavigate, Route, Routes } from 'react-router-dom';

//page
import Room from "./pages/Room"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SchedulerTest from "./pages/SchedulerTest";

function App() {
    return (
        <Routes>
            <Route path = "/" element= {<Home/>}/>
            <Route exact path = "/room/:roomId" element={<Login/>}/>
            <Route exact path = "/room/:roomId/user/:userId" element={<Room/>}/>
            <Route path = "/scheduler_test" element={<SchedulerTest/>}/>
        </Routes>
    );
}

export default App;