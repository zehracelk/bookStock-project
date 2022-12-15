import * as React from "react";
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import { Button, TextField } from "@mui/material";


const PubModal = ({ open, setOpen, info, setInfo }) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Box component="form" sx={flexColumn}>
                        <TextField id="outlined-basic"
                            label="Publisher Name"
                            variant="outlined"
                            type="text"
                            value={info?.name || ""}
                            onChange={(e)=>setInfo(e.target.value)}
                            />

                        <TextField id="outlined-basic"
                            label="Phone"
                            variant="outlined"
                            type="tel"
                            value={info?.phone || ""} />

                        <TextField id="outlined-basic"
                            label="Address"
                            variant="outlined"
                            type="text"
                            value={info?.address || ""} />

                        <TextField id="outlined-basic"
                            label="Image Id"
                            variant="outlined"
                            type="url"
                            value={info?.image || ""} />

                        <Button variant="contained">Save Publisher</Button>

                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default PubModal
