// import 'antd/dist/reset.css';
import { Button, message } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
import { useRoutes, Link } from "react-router-dom";
import router from "./router";
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

function ToPage1() {
    const navigateTo = useNavigate()
    useEffect(() => {
        navigateTo("/page1")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <div></div>
}
function ToLogin() {
    const navigateTo = useNavigate()
    useEffect(() => {
        navigateTo("/login")
        message.warning("no login")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <div></div>
}

function BeforeRouterEnter() {
    const outlet = useRoutes(router);
    const location = useLocation()
    const token = localStorage.getItem("token")
    if (location.pathname === '/login' && token) {
        return <ToPage1 />
    }

    if (location.pathname !== "/login" && !token) {
        return <ToLogin />
    }

    return outlet
}

function App() {

    return (
        <>
            {/* <Outlet></Outlet> */}
            {/* {outlet} */}
            <BeforeRouterEnter />
        </>
    );
}

export default App;
