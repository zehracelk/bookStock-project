import * as React from "react";
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { flexCenter, flexColumn, modalStyle } from "../../styles/globalStyle";
import { Button, TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";


const AuthModal = ({ open, setOpen, info, setInfo }) => {

    const { postAuthors, putAuthors } = useStockCalls()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(info.id){
            putAuthors(info);
        } else {
            postAuthors(info);

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
                            label="Author Name"
                            name="name"
                            id="name"
                            variant="outlined"
                            type="text"
                            value={info?.name || ""}
                            onChange={handleChange}
                            required
                        />

                        
                        
                        <TextField label="Image"
                            name="image"
                            id="image"
                            variant="outlined"
                            type="url"
                            value={info?.image || ""}
                            onChange={handleChange}
                            required

                        />

                        <Button type="submit" variant="contained" size="large">Save Author</Button>

                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default AuthModal
