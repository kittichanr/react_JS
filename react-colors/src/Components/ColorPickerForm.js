import React from 'react'
import { ChromePicker } from "react-color"
import Button from "@material-ui/core/Button"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import useStyles from '../styles/ColorPickerFormStyles'

const ColorPickerForm = ({ isPaletteFull, addNewColor, colors }) => {
    const classes = useStyles()

    const [currentColor, setCurrentColor] = React.useState("teal")
    const [inputValues, setInputValues] = React.useState({
        newColorName: '',
    })

    React.useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
            return colors.every(
                ({ name }) => name?.toLowerCase() !== value?.toLowerCase()
            )
        })
        ValidatorForm.addValidationRule("isColorUnique", (value) => {
            return colors.every(
                ({ color }) => color !== currentColor
            )
        })
    }, [colors, currentColor])

    const handleChange = (event) => {
        setInputValues({ [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        const newColor = {
            color: currentColor,
            name: inputValues.newColorName,
        }
        addNewColor(newColor)
        setInputValues({ newColorName: '' })
    }

    return (
        <div>
            <ChromePicker
                color={currentColor}
                onChangeComplete={(newColor) => setCurrentColor(newColor.hex)}
                className={classes.picker}
            />
            <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator
                    className={classes.colorInput}
                    value={inputValues.newColorName || ''}
                    name='newColorName'
                    variant="filled"
                    margin="normal"
                    onChange={handleChange}
                    validators={["required", "isColorNameUnique", "isColorUnique"]}
                    errorMessages={[
                        "Enter Color Name",
                        "Color name must be unique",
                        "Color already used!",
                    ]}
                    placeholder="Color Name"
                />
                <Button
                    className={classes.addColor}
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: isPaletteFull ? 'grey' : currentColor }}
                    disabled={isPaletteFull}
                >
                    {isPaletteFull ? 'Palette Full' : 'Add Palette'}
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default ColorPickerForm
