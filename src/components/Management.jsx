import {useSelector} from "react-redux";
import {List, ListItem} from "@mui/material";
import Employee from "./Employee.jsx";

const Management = () => {
    const empList = useSelector(state => state.myEmployees.employees);
    //console.log("emplist", empList)
    return (
        <div>
            {empList.map((value, idx) =>
                <Employee key={idx} value={value}/>
            )}
        </div>

    );
};

export default Management;
