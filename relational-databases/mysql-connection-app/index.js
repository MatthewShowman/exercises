const mysql = require('mysql');

const databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'store'
});

// databaseConnection.query('SELECT * FROM users', (error, rows) => {
// if (error) {
//     console.log(error);
// }

// rows.forEach(user => {
//     console.log(`${user.id} ${user.name} ${user.username}`);
//     });

//     console.log(rows[0].id);
//     console.log(rows[0].username);
//     console.log(rows[0].email);
//     console.log(rows[0].name);
// });

let newUsers = [
    { name: 'Charles', email: 'chuck@yahoo.com', username: 'Chuck789', password: 'secret123' },
    { name: 'Darla', email: 'darla@yahoo.com', username: 'Darla789', password: 'secret456' },
]

newUsers.forEach((user) => {
    let sql = `INSERT INTO users (name, email, username, password)
    VALUES ('${newUsers[i].name}','${newUsers[i].email}','${newUsers[i].username}','${newUsers[i].password}')`;

    databaseConnection.query(sql, (error) => {
        if (error) {
            console.log(error);
        }
    });
});

for (i = 0; i < newUsers.length; i++) {
    databaseConnection.query(`INSERT INTO users (name, email, username, password) 
    VALUES ('${newUsers[i].name}','${newUsers[i].email}','${newUsers[i].username}','${newUsers[i].password}')`, (error, rows) => {
        if (error) {
            console.log(error);
        }
        // rows.forEach(user => {
        //     console.log(`${user.id} ${user.name} ${user.username}`);
        // });
    })
}

databaseConnection.end((error) => console.log('TERMINATED THE DATABASE CONNECTION'));