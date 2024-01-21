import { Route, Routes } from "react-router-dom";
import Login from "./componets/Login"
import AdminHome from "./componets/AdminHome";
import TableData from "./componets/TableData";
import BilletCasting from "./componets/BilletCasting";
import Barchart from "./componets/BarChart";
import ClauseDoc from "./componets/ClauseDoc";
import AgeingReport from "./componets/AgeingReport";
import ArchivedDocuments from "./componets/ArchivedDocuments";
const AppRoutes = props => {
    return (
        <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/AdminHome" element={<AdminHome />}></Route>
            <Route exact path="/TableData" element={<TableData />}></Route>
            <Route exact path="/BilletCasting" element={<BilletCasting />}></Route>
            <Route exact path="/Barchart" element={<Barchart />}></Route>
            <Route exact path="/ClauseDoc" element={<ClauseDoc />}></Route>
            <Route exact path="/AgeingReport" element={<AgeingReport />}></Route>
            <Route exact path="/ArchivedDocuments" element={<ArchivedDocuments />}></Route>

        </Routes>
    );
};

export default AppRoutes;
