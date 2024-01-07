import { Route, Routes } from "react-router-dom";
import Login from "./componets/Login"
import AdminHome from "./componets/AdminHome";
import TableData from "./componets/TableData";
import BilletCasting from "./componets/BilletCasting";
import Barchart from "./componets/BarChart";
const AppRoutes = props => {
    return (
        <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/AdminHome" element={<AdminHome />}></Route>
            <Route exact path="/TableData" element={<TableData />}></Route>
            <Route exact path="/BilletCasting" element={<BilletCasting />}></Route>
            <Route exact path="/Barchart" element={<Barchart />}></Route>
        </Routes>
    );
};

export default AppRoutes;
