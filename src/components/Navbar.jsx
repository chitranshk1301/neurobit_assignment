// navbar using material ui at the left side of the page 

import React from 'react';
import Button from '@mui/material/Button';
import GridView from '@mui/icons-material/GridView';
import NoteAdd from '@mui/icons-material/NoteAdd';
import Toll from '@mui/icons-material/Toll';
// import { connect } from 'react-redux';

const navbar = () => {
    return (
        <aside className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 '>
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <p className='text-white mx-10 mt-5 font-bold text-3xl font-dmSans'>React Test</p>
                <hr className='my-8 h-1 bg-gray-200 border-1 border-gray-950 dark:bg-gray-700' />
                <div className='mt-10 grid grid-cols-1 gap-5'>
                    <Button style={{color: 'white', marginLeft: '10'}}><GridView style={{marginRight: '10', color: 'white'}}/>Dashboard</Button>
                    <Button style={{color: 'white', marginLeft: '10', backgroundColor: 'rgba(44, 169, 227, 0.25)'}}><NoteAdd style={{marginRight: '10', color: 'white'}}/>Montages</Button>
                    <Button style={{color: 'white', marginLeft: '10'}}><Toll style={{marginRight: '10', color: 'white'}}/>Credits</Button>
                </div>

                <div className='h-40 w-56 mt-96 bg-sky-950 relative'>
                    <p className='ml-20 pt-10 text-white text-3xl font-dmSans font-semibold'>1,650</p>
                    <p className='ml-12 text-white text-sm font-dmSans'>Total Credits Available</p>
                </div>  
            </div>
        </aside>
    )
}
export default navbar;
