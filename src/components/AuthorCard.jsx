import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardHeader } from '@mui/material';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { btnHoverStyle, flex } from '../styles/globalStyle';
import EditIcon from "@mui/icons-material/Edit";
import useStockCalls from '../hooks/useStockCalls';

export default function AuthorCard({ auth, setInfo, info, setOpen }) {

    const { deleteAuthors } = useStockCalls()

    return (
        <Card elevation={10}
            sx={{
                p: 2,
                width: "300px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
            }}>
                <CardHeader title={auth?.name} subheader={auth?.address} />
                <CardMedia
                    component="img"
                    sx={{ p: 1, objectFit: "contain",height:"250px" }}
                    image={auth?.image}
                    alt="publisher-img"
                />
               
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <EditIcon
                    sx={btnHoverStyle}
                    onClick={() => { setOpen(true);setInfo(auth) }}
                />
                <DeleteOutlineIcon
                    sx={btnHoverStyle}
                    onClick={() => deleteAuthors(auth?.id)}
                />            </CardActions>
        </Card>
    );
}