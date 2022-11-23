import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { getAllPosts } from '../api-helpers/Helpers';
import DiaryItem from './DiaryItem';

const Diaries = () => {
    useEffect(() => {
        getAllPosts().then((data) => console.log(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Box display="flex"
            flexDirection={"column"}
            padding={3}
            justifyContent={"center"}
            alignItems={"center"}>
            {""}
            {[1, 2, 3, 4, 5].map((item) => {
                return <DiaryItem key={item} />
            })}
            <DiaryItem />
        </Box>
    )
}

export default Diaries