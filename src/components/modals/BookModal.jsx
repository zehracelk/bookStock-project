import * as React from "react";
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {  flexColumn, modalStyle } from "../../styles/globalStyle";
import { Button, TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";


const BookModal = ({ open, setOpen, info, setInfo }) => {

    const { postBooks, putBooks } = useStockCalls()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(info.id){
            putBooks(info);
        } else {
            postBooks(info);

        }
        setOpen(false);
        setInfo({});

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={modalStyle}>
                    <Box sx={flexColumn} component="form" onSubmit={handleSubmit}>

                        <TextField
                            label="Book Name"
                            name="name"
                            id="name"
                            variant="outlined"
                            type="text"
                            value={info?.name || ""}
                            onChange={handleChange}
                            required
                        />

                        <TextField label="Author"
                            name="author"
                            id="author"
                            variant="outlined"
                            type="tel"
                            value={info?.brand || ""}
                            onChange={handleChange}
                            required

                        />

                      

                        <Button type="submit" variant="contained" size="large">Save Book</Button>

                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default BookModal
