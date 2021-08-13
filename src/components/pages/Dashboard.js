import {useState} from 'react'

import TopNav from '../shared/TopNav'
import PatientNav from '../shared/PatientNav'

import DailyNotesForm from '../forms/notes/DailyNotesForm'
import Notes from '../forms/notes/Notes'

import { HeaderWrap } from '../../styles/DashboardStyles'


// import UserPage from './UserPage'


function Dashboard() {

     const [notes, setNotes] = useState ([])



    const addNewNote = (note) => {
        // const newNote = {
        //     id: Date.now(), 
        //     title: note.title,
        //     body: note.body
        // }

        setNotes([...notes, {...note, id: Date.now() }]);
    }



    return (
        <div>
            <HeaderWrap>
                <h2 className="title">DASHBOARD</h2>
                <TopNav />
            </HeaderWrap>
            <PatientNav />
            <DailyNotesForm addNewNote={addNewNote} />
            <Notes notes={notes} />
        </div>
    )
}

export default Dashboard
