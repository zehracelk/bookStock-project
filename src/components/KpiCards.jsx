import { Grid, Paper, Box, Avatar, Typography, getStepLabelUtilityClass } from '@mui/material'
import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments'
import { amber, indigo, pink } from '@mui/material/colors';
import { flex } from '../styles/globalStyle';
import { useSelector } from 'react-redux';
import useStockCalls from '../hooks/useStockCalls';
import { useEffect } from 'react';



const KpiCards = () => {

    const { sales, purchases } = useSelector((state) => state.stock)

    const totalSales = sales?.map((sale) => sale.price_total )

    console.log(totalSales)

    const data = [
        {
            title: "sales",
            metric: "$10350",
            icon: <MonetizationOnIcon />,
            color: indigo[900],
            bgColor: indigo[100]
        },
        {
            title: "profit",
            metric: "$2000",
            icon: <PaymentsIcon />,
            color: pink[900],
            bgColor: pink[100]
        },
        {
            title: "purchases",
            metric: "$14900",
            icon: <ShoppingCartIcon />,
            color: amber[900],
            bgColor: amber[100]
        },
    ]

    return (

        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            {data.map((item) => (
                <Grid item key={item.title} xs={12} sm={6} md={4}>
                    <Paper sx={{ p: 2 }} elevation={10}>
                        <Box sx={flex}>
                            <Avatar sx={{
                                width: "4rem", height: "4rem", color: item.color,
                                backgroundColor: item.bgColor
                            }}>
                                {item.icon}
                            </Avatar>
                            <Box>
                                <Typography variant='button'>{item.title}</Typography>
                                <Typography variant='h5'>{item.metric}</Typography>
                            </Box>

                        </Box>
                    </Paper>
                </Grid>

            ))}
        </Grid>
    )
}

export default KpiCards;
