import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import PubCard from "../components/PubCard";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import BookModal from "../components/modals/PubModal";


const Publishers = () => {

  const { getBooks } = useStockCalls();
  const { publishers } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({})

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <Box>
      <Typography variant="h4" mb={4}>Books</Typography>

      <Button variant="contained"
        onClick={() => { setOpen(true); setInfo({}) }} >
        New Book
      </Button>

      <BookModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

      {publishers?.length > 0 && (
        <Grid container justifyContent="center" gap={3} mt={1}>
          {publishers?.map((pub) => (
            <Grid item key={pub.id} >
              <PubCard pub={pub} setInfo={setInfo} info={info} setOpen={setOpen}/>
            </Grid>


          ))}
        </Grid>
      )}



    </Box>


  )
}

export default Publishers;



