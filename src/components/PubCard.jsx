import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { btnHoverStyle, flex } from '../styles/globalStyle';
import EditIcon from "@mui/icons-material/Edit";
import useStockCalls from '../hooks/useStockCalls';

export default function PubCard({ pub ,setInfo, info }) {
    
    const {deletePublishers} = useStockCalls()
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={pub?.image}
                    alt="publisher-img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {pub?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {pub?.address}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <EditIcon
                    sx={btnHoverStyle}
                    onClick={()=>{setInfo(pub)}}
                />
                <DeleteOutlineIcon
                    sx={btnHoverStyle}
                    onClick= {()=>deletePublishers(pub.id)}
                />            </CardActions>
        </Card>
    );
}