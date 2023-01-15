import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import AuthorCard from "../components/AuthorCard";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AuthModal from "../components/modals/AuthModal";


const Author = () => {

  const { getAuthors } = useStockCalls();
  const { authors } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({})

  useEffect(() => {
    getAuthors();
  }, [])

  return (
    <Box>
      <Typography variant="h4" mb={4}>Author</Typography>

      <Button variant="contained"
        onClick={() => { setOpen(true); setInfo({}) }} >
        New Author
      </Button>

      <AuthModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

      {authors?.length > 0 && (
        <Grid container justifyContent="center" gap={3} mt={1}>
          {authors?.map((auth) => (
            <Grid item key={auth.id} >
              <AuthorCard auth={auth} setInfo={setInfo} info={info} setOpen={setOpen} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>


  )
}

export default Author;



