import {Avatar, Button, ButtonGroup, Container, Divider, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import React from "react";

const Candidate = ({value, idx, onGetOne}) => {
    const name = `${value.name.title}. ${value.name.first} ${value.name.last}`
    return (
        <Container maxWidth="sm">
            <ListItemAvatar>
                <Avatar alt="" src={value.picture.large}/>
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={
                    <Typography
                        sx={{display: 'inline'}}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Location: {value.location.country}
                    </Typography>

                }
            />
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
            >
                <Button onClick={() => onGetOne(idx)}>Hide</Button>
                <Button>Save</Button>
            </ButtonGroup>
        </Container>
    );
};

export default Candidate;
