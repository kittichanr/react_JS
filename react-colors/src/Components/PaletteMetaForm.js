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
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Choose a Palette name</DialogTitle>
                <ValidatorForm onSubmit={() => handleSubmit(inputValues.newPaletteName)}>
                    <DialogContent>
                        <DialogContentText>
                            please enter a name for your beautiful palette . Make sure it unique! 
                        </DialogContentText>
                            <TextValidator
                                label='Palette Name'
                                name='newPaletteName'
                                value={inputValues.newPaletteName || ''}
                                onChange={handleChange}
                                fullWidth
                                margin='normal'
                                validators={["required", 'isPaletteNameUnique']}
                                errorMessages={[
                                    "Enter Palette Name",
                                    "Palette name must be unique"
                                ]}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">Cancel</Button>
                        <Button variant='contained' color='primary' type='submit '>Save Pallete</Button>
                    </DialogActions>
                </ValidatorForm>

            </Dialog>
        </div>
    );
}

export default PaletteMetaForm
