import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

const PaletteMetaForm = ({ palettes, handleSubmit, hideForm }) => {
    const [inputValues, setInputValues] = useState({
        newPaletteName: ''
    })
    const [stage, setStage] = useState('form')

    useEffect(() => {
        ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
            return palettes.every(
                ({ paletteName }) => paletteName?.toLowerCase() !== value?.toLowerCase()
            )
        })
    }, [palettes])

    const handleChange = (event) => {
        setInputValues({ [event.target.name]: event.target.value })
    }

    const showEmojiPicker = () => {
        setStage('emoji')
    }

    const savePalette = (emoji) => {
        const newPalette = {
            paletteName: inputValues.newPaletteName,
            emoji: emoji.native
        }
        handleSubmit(newPalette)
        setStage('')
    }

    return (
        <div>
            <Dialog open={stage === 'emoji'} onClose={hideForm}>
                <DialogTitle id="form-dialog-title">choose a Palette Emoji</DialogTitle>
                <Picker title="Pick a palette emoji" onSelect={savePalette} />
            </Dialog>
            <Dialog open={stage === 'form'} onClose={hideForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Choose a Palette name</DialogTitle>
                <ValidatorForm onSubmit={showEmojiPicker}>
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
                        <Button onClick={hideForm} color="primary">Cancel</Button>
                        <Button variant='contained' color='primary' type='submit '>Save Pallete</Button>
                    </DialogActions>
                </ValidatorForm>

            </Dialog>
        </div>
    );
}

export default PaletteMetaForm
