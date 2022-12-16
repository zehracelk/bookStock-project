import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import BookModal from "../components/modals/BookModal";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { btnHoverStyle, flexRow } from "../styles/globalStyle";
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const Books = () => {

  const { getBooks, getAuthors } = useStockCalls();
  const { books } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({})
  const [toggle,setToggle] = useState({
    author:false,
    book:false,
    stock:1

  })

  useEffect(() => {
    getBooks();
    getAuthors()
  }, [])

  const handleSortNumber =(arg)=>{
    setToggle({...toggle, [arg]:toggle[arg]*-1})
  }

  return (
    <Box>
      <Typography variant="h4" mb={4}>Books</Typography>

      <Button variant="contained"
        onClick={() => { setOpen(true); setInfo({}) }} >
        New Book
      </Button>

   {books?.length > 0 &&
     (
         <TableContainer component={Paper} sx={{mt:3}} elevation={10}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">*</TableCell>
            <TableCell align="center">
                <Box sx={flexRow}>
                    <div>Author</div>
                    {true && <UpgradeIcon/>}
                    {true && <VerticalAlignBottomIcon/>}
                </Box>
            </TableCell>
            <TableCell align="center">
            <Box sx={flexRow}>
                    <div>Book</div>
                    {true && <UpgradeIcon/>}
                    {true && <VerticalAlignBottomIcon/>}
                </Box>
            </TableCell>
            <TableCell align="center">
            <Box sx={flexRow} onClick={()=>handleSortNumber("stock")}>
                    <div>Stock</div>
                    {toggle.stock === 1 && <UpgradeIcon/>}
                    {toggle.stock ===-1 && <VerticalAlignBottomIcon/>}
                </Box>
            </TableCell>

            <TableCell align="center">Operation</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book,index) => (
            <TableRow
              key={book.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {index+1}
              </TableCell>
              <TableCell align="center">{book.calories}</TableCell>
              <TableCell align="center">{book.fat}</TableCell>
              <TableCell align="center">{book.carbs}</TableCell>
              <TableCell align="center">{book.protein}</TableCell>
              <TableCell align="center"><DeleteOutlineIcon sx={btnHoverStyle} /></TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>)}


    </Box>


  )
}

export default Books;



