import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const PaletteMetaForm = ({ palettes, handleSubmit }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [inputValues, setInputValues] = React.useState({
        newPaletteName: ''
    })

    React.useEffect(() => {
        ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
            return palettes.every(
                ({ paletteName }) => paletteName?.toLowerCase() !== value?.toLowerCase()
            )
        })
    }, [palettes])

    const handleChange = (event) => {
        setInputValues({ [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
          </DialogContentText>
                    <ValidatorForm onSubmit={() => handleSubmit(inputValues.newPaletteName)}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <TextValidator
                                label='Palette Name'
                                name='newPaletteName'
                                value={inputValues.newPaletteName || ''}
                                onChange={handleChange}
                                validators={["required", 'isPaletteNameUnique']}
                                errorMessages={[
                                    "Enter Palette Name",
                                    "Palette name must be unique"
                                ]}
                            />
                            <Button variant='contained' color='primary' type='submit '>Save Pallete</Button>
                        </div>
                    </ValidatorForm>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default PaletteMetaForm
