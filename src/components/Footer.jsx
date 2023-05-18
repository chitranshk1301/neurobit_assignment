import React from "react";
import { Button } from "@mui/material";

const footer = () => {
    return (
        <div className="p-4 sm:ml-64 mt-28 bg-white grid grid-cols-10 gap-11">
            <Button variant="outlined" style={{color: 'gray'}}>Back</Button>
            <p className="text-sm mt-3">Cancel Montage</p>
            <Button variant="contained">Next</Button>
        </div>
    )
}
export default footer;