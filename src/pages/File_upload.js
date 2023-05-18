import React from "react";
import { Button } from "@mui/material";

const FileUpload = () => {
    return (
        <div className="bg-white p-4 sm:ml-96 mt-10 rounded-md w-4/6">
            <div className="bg-zinc-200 p-40 border-2 border-dotted border-black">
                <p className="mx-80">
                    <Button variant="outlined" style={{ color: 'gray' }}>Browse files</Button>
                </p>
            </div>
        </div>
    );
}

export default FileUpload;