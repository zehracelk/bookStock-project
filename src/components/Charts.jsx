import React from 'react';
import { Card, Title, LineChart } from "@tremor/react";
import { Grid, Typography } from '@mui/material';

const Charts = () => {

  const dataFormatter = (number) =>
    `${Intl.NumberFormat("us").format(number).toString()}$`;

  const salesData = [
    {
      "sales": 8300,
      date: "20.11.2022",
    },
    {
      "sales": 6500,
      date: "20.11.2022",
    },
    {
      "sales": 4300,
      date: "25.11.2022",
    },
    {
      "sales":7500,
      date:"28.11.2022"
    }
   
  ]

  const purchasesData = [
    {
      "purchases": 3000,
      date: "20.11.2022",
    },

    {
      "purchases": 4750,
      date: "20.11.2022",
    },

    {
      "purchases": 6000,
      date: "25.11.2022",
    },
    {
      "purchases": 3500,
      date: "28.11.2022",
    },

  ]


  return (
    <Grid container justifyContent="center" spacing={2} mt={3}>
      <Grid item xs={12} sm={12} md={6}>
        <Card sx={{ p: 3 }}>
          <Typography> Daily Sales (USD) </Typography>
          <LineChart
            data={salesData}
            dataKey="date"
            categories={["sales"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            marginTop="mt-6"
            yAxisWidth="w-15"
          />
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Card sx={{ p:3 }}>
          <Typography> Daily Purchases (USD) </Typography>
          <LineChart
            data={purchasesData}
            dataKey="date"
            categories={["purchases"]}
            colors={["red"]}
            valueFormatter={dataFormatter}
            marginTop="mt-6"
            yAxisWidth="w-15"
          />
        </Card>
      </Grid>

    </Grid>
  )
}

export default Charts
