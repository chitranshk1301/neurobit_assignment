import React from "react";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const header = () => {
    return (
        <div className="bg-slate-200">
            <div className="p-4 sm:ml-64 h-24 grid grid-cols-2 gap-x-96 bg-slate-200">
                <p className="font-dmSans font-bold text-3xl mt-5 ml-10">Test_Study</p>
                <p className="ml-96 mt-5 font-dmSans font-medium"><AccountCircleTwoToneIcon style={{ marginRight: '10', color: 'cyan' }} />User Name</p>
            </div>
            <hr className="mt-3" />
        </div>

    )
}

export default header;