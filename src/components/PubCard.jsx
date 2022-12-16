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

export default function PubCard({ pub, setInfo, info, setOpen }) {

    const { deletePublishers } = useStockCalls()

    return (
        <Card elevation={10}
            sx={{
                p: 2,
                width: "300px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
            }}>
                <CardHeader title={pub?.name} subheader={pub?.address} />
                <CardMedia
                    component="img"
                    sx={{ p: 1, objectFit: "contain",height:"130px" }}
                    image={pub?.image}
                    alt="publisher-img"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Phone: {pub?.phone}
                    </Typography>

                </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <EditIcon
                    sx={btnHoverStyle}
                    onClick={() => { setOpen(true);setInfo(pub) }}
                />
                <DeleteOutlineIcon
                    sx={btnHoverStyle}
                    onClick={() => deletePublishers(pub?.id)}
                />            </CardActions>
        </Card>
    );
}