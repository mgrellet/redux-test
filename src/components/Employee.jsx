import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const Employee = ({idx, value}) => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                alt=""
                height="140"
                image={value.picture.large}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {value.name.title}. {value.name.first} {value.name.last}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {value.location.city} - {value.location.country}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{value.email}</Button>
            </CardActions>
        </Card>
    );
}

export default Employee;
