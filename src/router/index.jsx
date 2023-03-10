/**
 * @路由文件
 *  App > List + Edit + Means
 *  Login
 *  Register
 */
import App from "../App";
import List from "../pages/List";
import Edit from "../pages/Edit";
import Means from "../pages/Means";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Info from "../pages/Info";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const BaseRouter = () => (
    <Router>
        <Routes>

            <Route path='/' element={<App />}>
                <Route path='/' element={<Navigate to="/home" />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route exact path='/list' element={<List />}></Route>
                <Route exact path='/list/info' element={<Info />}></Route>
                <Route path='/edit' element={<Edit />}></Route>
                <Route path='/edit/:id' element={<Edit />}></Route>
                <Route path='/means' element={<Means />}></Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    </Router >
)

export default BaseRouter