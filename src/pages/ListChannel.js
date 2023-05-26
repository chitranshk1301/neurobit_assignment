import React from 'react'
import Data from '../schema.json'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
// import { useContext } from 'react';
// import ChannelContext from '../components/Context';
const mapstyles = {
	"& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
		minWidth: "10rem",
		height: "5px"
	},
	em: {
		// display: 'none'
	}

}

const Mapchannel = (props) => {
	const [primary, setPrimary] = React.useState([[]]);
	const [defchan, setDefault] = React.useState([[]]);
	// const { Allchannels, setAllchannels, PrimaryChannel, setPrimaryChannel,
	// 	DefaultChannel, setDefaultChannel } = useContext(ChannelContext);

	const handleadd = (data, p, d, i) => {

	}
	return (
		<div>

			{Data.channels.map((data, index) => {
				return (
					<>

						<div className='steppercontainer channeldisplay'>
							<div >
								<h5>{data}</h5>
							</div>

							<div>
								<Select
									value={primary[index]}
									onChange={(e) => {
										setPrimary([...primary, e.target.value])
									}}
									displayEmpty
									inputProps={{ 'DM sans': 'Without label' }}
									sx={mapstyles}
									className={index + 100}
								>
									<MenuItem value="">
										<em>Select Channel</em>
									</MenuItem>
									<MenuItem value="C3">C3</MenuItem>
									<MenuItem value="A3">A3</MenuItem>
									<MenuItem value="B3">B3</MenuItem>
									<MenuItem value="B1">B1</MenuItem>
									<MenuItem value="C4">C4</MenuItem>
									<MenuItem value="NULL">NULL</MenuItem>
								</Select>

							</div>
							<div>

								<Select
									value={defchan[index]}
									onChange={(e) => {
										setDefault([...defchan, e.target.value])
									}}
									displayEmpty
									inputProps={{ 'DM sans': 'Without label' }}
									sx={mapstyles}
									className={index + 200}
									

								>
									<MenuItem value="">
										<em>Select Channel</em>
									</MenuItem>
									<MenuItem value="C3">C3</MenuItem>
									<MenuItem value="A3">A3</MenuItem>
									<MenuItem value="B3">B3</MenuItem>
									<MenuItem value="B1">B1</MenuItem>
									<MenuItem value="C4">C4</MenuItem>
									<MenuItem value="NULL">NULL</MenuItem>
								</Select>

							</div>
							<div>
								{props.st === 2 ? <Button variant="outlined" className={index + 300} onClick={handleadd(data, primary, defchan, index)}>+ Add Backup Channels </Button> :
									<Button variant="outlined" className={index + 300} onClick={handleadd(data, primary, defchan, index)}>Edit channels </Button>}
							</div>

						</div >


					</>
				)


			})}

		</div >
	)
}

export default Mapchannel