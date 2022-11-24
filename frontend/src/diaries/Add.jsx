import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import React from 'react';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Add = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            width="100%"
            height="100%">
            <Box display="flex" margin="auto" padding={2}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    fontFamily={"dancing script"}>
                    Add Your Diaries
                </Typography>
                <TravelExploreIcon
                    sx={{ fontSize: "40px", paddingLeft: 1, color: "lightcoral" }} />
            </Box>
            <form>
                <Box
                    padding={3}
                    display="flex"
                    width="80%"
                    margin="auto"
                    flexDirection={"column"}>
                    <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel>
                    <TextField variant='standard' margin='normal' />
                    <FormLabel sx={{ fontFamily: "quicksand" }}>Description</FormLabel>
                    <TextField variant='standard' margin='normal' />
                    <FormLabel sx={{ fontFamily: "quicksand" }}>Image URL</FormLabel>
                    <TextField variant='standard' margin='normal' />
                    <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel>
                    <TextField variant='standard' margin='normal' />
                    <FormLabel sx={{ fontFamily: "quicksand" }}>Date</FormLabel>
                    <TextField variant='standard' margin='normal' />
                    <Button
                        sx={{ width: "50% ", margin: "auto", mt: 2, borderRadius: "10px" }}
                        color='warning'
                        variant='contained'>
                        Post
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default Add