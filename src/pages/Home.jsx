import React, { useEffect } from 'react'
import useStockCalls from '../hooks/useStockCalls'

const Home = () => {

  const { getPublishers} = useStockCalls();


  useEffect(() =>{
    getPublishers();
  },[])

  return (
    <div>
      home
    </div>
  )
}

export default Home
