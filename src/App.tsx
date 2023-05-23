// import 'antd/dist/reset.css';
import { Button } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
import { useRoutes, Link } from "react-router-dom";
import router from "./router";

function App() {
  const outlet = useRoutes(router);

  return (
    <>
      {/* <Outlet></Outlet> */}
      {outlet}
    </>
  );
}

export default App;
