import {Route, Routes} from "react-router-dom";
import List from "../components/ListCandidate.jsx";
import Management from "../components/Management.jsx";

const MyRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/list" element={<List />}></Route>
            <Route path="/management" element={<Management />}></Route>
        </Routes>
    );
};
export default MyRouter
