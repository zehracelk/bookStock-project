import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import useStockCalls from '../hooks/useStockCalls'
import KpiCards from '../components/KpiCards';
import Charts from '../components/Charts';

const Home = () => {

  const { getPublishers, getSales} = useStockCalls();


  useEffect(() =>{
    getPublishers();
    getSales();
  },[])

  return (
    <Box>
      <Typography variant='h4' color="error" mb={4}>
      Dashboard
      </Typography>
      <KpiCards />
      <Charts/>
      
    </Box>
  )
}

export default Home
