import React from "react";
import { Button } from "@mui/material";
import { Icon } from '@iconify/react';
import stepper from "../components/Stepper";

const FileUpload = () => {
    stepper(1);
    return (
        <div className="bg-white p-4 sm:ml-96 mt-16 rounded-md w-4/6 mb-10">
            <div className="bg-zinc-200 p-40 border-2 border-dotted border-black">
                <p className="mx-80">
                    <Icon icon="ph:files-fill" color="#2f7ec7" width="48" height="65" className="ml-10" />
                    <Button variant="outlined" style={{ color: 'gray' }} type="input">Browse files</Button>
                </p>
            </div>
        </div>
    );
}

export default FileUpload;