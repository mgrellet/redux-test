import React, {useEffect, useState} from "react";
import Candidate from "./Candidate.jsx";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

const ListCandidate = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=6')
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

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {candidates.map((value,idx) =>
                <ListItem key={idx} alignItems="flex-start">
                 <Candidate key={idx} value={value} idx={idx} onGetOne={getOne}/>
                </ListItem>
            )}
            <Divider variant="inset" component="li" />
        </List>

    );
};

export default ListCandidate;
