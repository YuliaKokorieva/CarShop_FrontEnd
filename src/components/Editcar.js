import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Editcar(props) {
  const [open, setOpen] = React.useState(false);
	const [car, setCar] = React.useState({
		brand: '', model: '', color: '', fuel: '', year: '', price: ''
	})

  const handleClickOpen = () => {
    fetch(props.link)
    .then(response => response.json())
    .then(data => setCar(data))
    .catch(err=> console.log(err))
    setOpen(true);
  };
    
	const handleClose = () => {
    setOpen(false);
  };

	const handleInputChange=(event)=> {
		setCar({...car, [event.target.name]: event.target.value})
	}

const updateCar = () => {
  props.updateCar(car, props.link);
  handleClose();
}  

	return(
    <div>
			<Button startIcon = {<EditIcon />} size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialig-title">
        <DialogTitle id="form-dialog-title">Edit car</DialogTitle>
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
          <Button onClick={updateCar}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}