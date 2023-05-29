import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const footer = () => {
    return (
        <div className="p-4 sm:ml-64 mt-28 bg-white flex flex-cols justify-evenly static bottom-0">
            <Button variant="outlined" style={{ color: 'gray' }}>Back</Button>
            <Link to="/">
                <p className="text-sm mt-3">Cancel Montage</p>
            </Link>
            <Link to="/listChannel">
                <Button variant="contained">Next</Button>
            </Link>
        </div>
    )
}
export default footer;