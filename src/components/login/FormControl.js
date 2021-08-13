import React from 'react'
import {FormGroup, Input, Label, FormFeedback} from 'reactstrap'

function FormControl({label, type, error, handleChange, value}) {

    // const name = label.toLowerCase()

    return (
        <FormGroup>
            <Label htmlFor="name">{label}</Label>
            <Input
                type={type}
                id="name"
                invalid={!!error}
                onChange={handleChange}
                value={value}
            />
            <FormFeedback>{error}</FormFeedback>
        </FormGroup>
    )
}

export default FormControl
