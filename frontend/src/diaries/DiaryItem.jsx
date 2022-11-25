import { Alert, Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box } from '@mui/system';
import { postDelete } from '../api-helpers/Helpers';
import { Link } from "react-router-dom";


const DiaryItem = ({ title,
    description,
    image,
    location,
    date,
    id,
    user,
    name, }) => {

    const [open, setOpen] = useState(false);

    const isLoggedInUser = () => {
        if (localStorage.getItem("userId") === user) {
            return true;
        }
        return false;
    }
    const handleDelete = () => {
        postDelete(id)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        setOpen(true);
    };
    return (
        <Card sx={{
            width: "50%",
            height: "60vh",
            margin: 1,
            padding: 1,
            display: "flex",
            flexDirection: "column",
            boxShadow: "5px  5px  10px #ccc"
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        {<EditLocationAltIcon />}
                    </IconButton>
                }
                title={location}
                subheader={date}
            />
            <CardMedia
                component="img"
                height="194"
                src={image}
                alt={title}
            />
            <CardContent>
                <Typography paddingBottom={1} variant="h6" color="text.secondary">
                    {title}
                </Typography>
                <hr />
                <Box paddingTop={1} display={"flex"} >
                    <Typography width="170px" fontWeight={"bold"} variant="div">
                        Vishnuraj M
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </Box>
            </CardContent>

            {isLoggedInUser && <CardActions sx={{ marginLeft: "auto" }}>
                <IconButton color="warning"><EditIcon /></IconButton>
                <IconButton onClick={handleDelete} color="error">
                    <DeleteForeverIcon />
                </IconButton>
            </CardActions>}

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
            >
                <Alert
                    onClose={() => setOpen(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    This is a success message!
                </Alert>
            </Snackbar>
            {(isLoggedInUser && <CardActions sx={{ marginLeft: "auto" }}>
                <IconButton LinkComponent={Link} to={`/post/${id}`} color="warning">
                    <ModeEditOutlineIcon />
                </IconButton>
                <IconButton color="error"><DeleteForeverIcon /></IconButton>
            </CardActions>)}

        </Card >
    )
}

export default DiaryItem