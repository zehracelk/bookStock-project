import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import PubCard from "../components/PubCard";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PubModal from "../components/modals/PubModal";


const Publishers = () => {

  const { getPublishers } = useStockCalls();
  const { publishers } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({})

  useEffect(() => {
    getPublishers();
  }, [])

  return (
    <Box>
      <Typography variant="h4" mb={4}>Publishers</Typography>

      <Button variant="contained"
        onClick={() => {setOpen(true);setInfo({})}} >
        New Publisher
      </Button>

      <PubModal open={open} setOpen={setOpen} info={info} setInfo={setInfo}/>

      {publishers?.length > 0 && (
        <Grid container justifyContent="center" gap={3} mt={1}>
          {publishers?.map((pub) => (
            <Grid item key={pub.id} >
              <PubCard pub={pub} setInfo={setInfo} info={info} />
            </Grid>


          ))}
        </Grid>
      )}



    </Box>


  )
}

export default Publishers;



