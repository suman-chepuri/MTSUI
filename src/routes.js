import { Route, Routes } from "react-router-dom";
import Login from "./componets/Login"
import AdminHome from "./componets/AdminHome";
import TableData from "./componets/TableData";
const AppRoutes = props => {
    return (
        <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/AdminHome" element={<AdminHome />}></Route>
            <Route exact path="/TableData" element={<TableData />}></Route>
        </Routes>
    );
};

export default AppRoutes;
