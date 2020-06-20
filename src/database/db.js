// import sqlite3 dependencie and create db
const sqlite3 = require('sqlite3').verbose()

//create object to do database operations
const db = new sqlite3.Database("./src/database/database.db")

db.serialize(() => {
    //Create tables
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            adrress2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //Insert register
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Nº 260",
        "Santa Cantarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]
    db.run(query, values, function(err) {
        if(err){
            return console.log(err)
        }
    })

    //Select register

    //Delete register
})