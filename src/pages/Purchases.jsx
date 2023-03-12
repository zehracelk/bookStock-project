import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { arrowStyle, btnHoverStyle, flexCenter } from "../styles/globalStyle";
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { type } from "@testing-library/user-event/dist/type";
import useSortColumn from "../hooks/useSortColumn";
import { MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";
import PurchaseModal from "../components/modals/PurchaseModal";



const Purchases = () => {

  const payments = [
    "250$", "500$", "300$", "800$"
  ]

  const { deleteBooks, getBookAuth, getPublishers } = useStockCalls();
  const { books, authors, publishers } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const columnObj = {
    brand: 1,
    name: 1,
    stock: 1
  }

  useEffect(() => {
    getPublishers();
    getBookAuth()
  }, [])

  const isAuthorSelected = (item) =>
    selectedAuthors?.includes(item.brand) || selectedAuthors.length === 0;

  const isBookSelected = (item) =>
    selectedBooks?.includes(item.name) || selectedBooks.length === 0;

  const filteredBooks = publishers?.filter((item) =>
    selectedAuthors.includes(item.brand))
    .map((item) => item.name)

  const { sortedData, handleSort, columns } = useSortColumn(publishers, columnObj);

  console.log(publishers);

  return (
    <Box>
      <Typography variant="h4" mb={4}>Purchases</Typography>


      <PurchaseModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />


      {sortedData?.length > 0 &&
        (
          <TableContainer component={Paper} sx={{ mt: 3 }} elevation={10}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">*</TableCell>
                  <TableCell align="center">
                    <Box sx={arrowStyle} onClick={() => handleSort("stock", "number")}>
                      <div>Purchase</div>
                      {columns.stock === 1 && <UpgradeIcon />}
                      {columns.stock === -1 && <VerticalAlignBottomIcon />}
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={arrowStyle} onClick={() => handleSort("stock", "number")}>
                      <div>Publisher</div>
                      {columns.stock === 1 && <UpgradeIcon />}
                      {columns.stock === -1 && <VerticalAlignBottomIcon />}
                    </Box>
                  </TableCell>



                  <TableCell align="center">Payment</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {sortedData
                  ?.filter((item => isAuthorSelected(item)))
                  .filter((item) => isBookSelected(item))
                  .map((book, index) => (
                    <TableRow
                      key={book.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {index + 1}
                      </TableCell>
                      <TableCell align="center">{book.id}</TableCell>
                      <TableCell align="center">{book.name}</TableCell>
                      <TableCell align="center">{book.id*100}$
                      </TableCell>


                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>)}


    </Box>


  )
}

export default Purchases;



