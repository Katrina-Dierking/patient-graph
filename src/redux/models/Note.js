class Note{
    constructor(
        id,
        name,
        description = '', 
        completed = false, 
        date = new Date()
        )
    {
        this.id = id
        this.name = name
        this.description= description
        this.completed = completed
        this.date = date
    }
}

export default Note