import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box } from '@mui/system';

const DiaryItem = ({ title, description, image, location, date, id, user }) => {

    const isLoggedInUser = () => {
        if (localStorage.getItem("userId") === user) {
            return true;
        }
        return false;
    }
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
                <IconButton color="error"><DeleteForeverIcon /></IconButton>
            </CardActions>}
        </Card >
    )
}

export default DiaryItem