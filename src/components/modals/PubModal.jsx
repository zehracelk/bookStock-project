import * as React from "react";
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { flexCenter, flexColumn, modalStyle } from "../../styles/globalStyle";
import { Button, TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";


const PubModal = ({ open, setOpen, info, setInfo }) => {

    const { postPublishers, putPublishers } = useStockCalls()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(info.id){
            putPublishers(info);
        } else {
            postPublishers(info);

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
                    <Box sx={flexCenter} component="form" onSubmit={handleSubmit}>

                        <TextField
                            label="Firm Name"
                            name="name"
                            id="name"
                            variant="outlined"
                            type="text"
                            value={info?.name || ""}
                            onChange={handleChange}
                            required
                        />

                        <TextField label="Phone"
                            name="phone"
                            id="phone"
                            variant="outlined"
                            type="tel"
                            value={info?.phone || ""}
                            onChange={handleChange}
                            required

                        />

                        <TextField label="Address"
                            name="address"
                            id="address"
                            variant="outlined"
                            type="text"
                            value={info?.address || ""}
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

                        <Button type="submit" variant="contained" size="large">Save Publisher</Button>

                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default PubModal
