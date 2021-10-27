import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';

export default function Addcar({saveCar}) {
  const [open, setOpen] = React.useState(false);
	const [car, setCar] = React.useState({
		brand: '', model: '', color: '', fuel: '', year: '', price: ''
	})

  const handleClickOpen = () => {
    setOpen(true);
  };
    
	const handleClose = () => {
    setOpen(false);
  };

	const handleInputChange=(event)=> {
		setCar({...car, [event.target.name]: event.target.value})
	}

	const addCar = () => {
		saveCar(car);
		handleClose();
	}

	return(
    <div>
			<Button startIcon = {<AddIcon />}  style={{margin:10}} variant="outlined" onClick={handleClickOpen}>
        Add car
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialig-title">
        <DialogTitle id="form-dialog-title">New car</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            name="brand"
						value={car.brand}
            label="brand"
            fullWidth
            variant="standard"
						onChange={e => handleInputChange(e)}
          />

					<TextField
            margin="dense"
            name="model"
						value={car.model}
            label="model"
            fullWidth
            variant="standard"
						onChange={e => handleInputChange(e)}
          />

					<TextField
            margin="dense"
            name="color"
						value={car.color}
            label="color"
            fullWidth
            variant="standard"
						onChange={e => handleInputChange(e)}
          />
					<TextField
            margin="dense"
            name="year"
						value={car.year}
            label="year"
            fullWidth
            variant="standard"
						onChange={e => handleInputChange(e)}
          />

					<TextField
            margin="dense"
            name="fuel"
						value={car.fuel}
            label="fuel"
            fullWidth
            variant="standard"
						onChange={e => handleInputChange(e)}
          />

					<TextField
            margin="dense"
            name="price"
						value={car.price}
            label="price"
            fullWidth
            variant="standard"
						onChange={e => handleInputChange(e)}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addCar}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}