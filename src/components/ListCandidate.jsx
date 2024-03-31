import {useEffect, useState} from "react";
import Candidate from "./Candidate.jsx";
import {Chip, List, ListItem} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {saveValue} from "../store/slices";

const ListCandidate = () => {
    const [candidates, setCandidates] = useState([]);
    const dispatch = useDispatch();
    const empList = useSelector(state => state.myEmployees.employees);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=4')
            .then(response => response.json())
            .then(data => setCandidates(data.results));
    }, []);

    const getOne = (idx) => {
        fetch('https://randomuser.me/api/?results=1')
            .then(response => response.json())
            .then(data => {
                const candidateTemp = [...candidates];
                candidateTemp[idx] = {...data.results[0]}
                setCandidates(candidateTemp);
            });
    }

    const save = (value) => {
        dispatch(saveValue(value));
    }

    return (
        <>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {candidates.map((value, idx) =>
                    <ListItem key={idx} alignItems="flex-start">
                        <Candidate key={idx} value={value} idx={idx} onGetOne={getOne} onSave={save}/>
                    </ListItem>
                )}
            </List>

            {empList.map((value, idx) => {
                return (
                    <Chip
                        key={idx}
                        label={value.name.first}
                        component="a"
                        href="/management" clickable
                    />
                )
            })}

        </>
    );
};

export default ListCandidate;
