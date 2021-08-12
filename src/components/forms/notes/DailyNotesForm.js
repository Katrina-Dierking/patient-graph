import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

function DailyNotesForm({name, addNewNote}) {

    const [note, setNote] = useState(
        {
            id: '',
            name: name, 
            body: ''

        });


    const handleChanges = e => {
        console.log("change handled!", e.target.value)
        const newObj = {...note, [e.target.name]: e.target.value}
        console.log('newObj', newObj)
        setNote(newObj)
    }

    const submitForm = e => {
        e.preventDefault();
        addNewNote(note)
        setNote({name: '', body: ''})
    }

    console.log("note", note)
    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label htmlFor="name">Daily Notes</Label>
                <Input 
                    required
                    id="name"
                    placeholder="Patient's Name"
                    type="text"
                    name="name"
                    value={note.name}
                    onChange={handleChanges}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="body">Note</Label>
                <Input
                    required
                    id="body"
                    placeholder="Details of patient care"
                    type="textarea"
                    name="body"
                    value={note.body}
                    onChange={handleChanges}
                />
            </FormGroup>

            <FormGroup>
                <Button 
                    type="submit">Add Note
                </Button>
            </FormGroup>
        </Form>
    )
}

export default DailyNotesForm
