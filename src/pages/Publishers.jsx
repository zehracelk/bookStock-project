import axios from "axios";
import { useEffect } from "react"
import useStockCalls from "../hooks/useStockCalls";

const Publishers = () => {

 const { getPublishers } = useStockCalls();

  useEffect(() => {
    getPublishers();
  }, [])



  return (
    <div>
      pblishers
    </div>
  )
}

export default Publishers;
