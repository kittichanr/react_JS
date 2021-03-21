import React from 'react'
import {
    makeStyles,
    Theme,
    createStyles,
} from "@material-ui/core/styles"
import { ChromePicker } from "react-color"
import Button from "@material-ui/core/Button"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        picker: {
            width: '100% !important',
            marginTop: '2rem',
        },
        addColor: {
            width: '100%',
            padding: '1rem',
            marginTop: 10,
            fontSize: '2rem'
        },
        colorInput: {
            width: '100%',
            height: '70px'
        }
    })
)


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
