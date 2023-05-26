import * as React from "react";
// import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Upload EDFs',
    'Map Channels',
    'save & Preview',
];

function stepper(props) {
    return (
        <div className='p-4 sm:ml-96 mt-3 bg-white rounded-md w-4/6'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={props.activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>

    );
}

export default stepper;