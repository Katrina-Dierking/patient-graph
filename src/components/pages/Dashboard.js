import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import TopNav from '../shared/TopNav'
import DailyNotesForm from '../forms/notes/DailyNotesForm'
import Notes from '../forms/notes/Notes'



import {
    HeaderWrap,
    TopWrap,
    ButtonWrap
    } from '../../styles/DashboardStyles'
import UserPage from './UserPage'




function Dashboard() {

     const [notes, setNotes] = useState ([])

    const addNewNote = (note) => {
        const newNote = {
            id: Date.now(), 
            title: note.title,
            body: note.body
        }

        setNotes([...notes, {...note, id: Date.now() }]);
    }



    return (
        <div>
            <HeaderWrap>
                <h2 className="dashTitle">DASHBOARD</h2>
                <TopNav />
            </HeaderWrap>
            <TopWrap>
                <ButtonWrap>
                    <Link to='/patientfiles'><button>View Patient List</button></Link>
                    <Link to='/patientcards'><button>View Patient Cards</button></Link>
                </ButtonWrap>
            </TopWrap>
            <DailyNotesForm addNewNote={addNewNote} />
            <Notes notes={notes} />
        </div>
    )
}

export default Dashboard
