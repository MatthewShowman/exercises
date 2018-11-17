const mysql = require('mysql');

const databaseConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'LiaoSha831106',
    database: 'store'
});

let newUsers = [
    { name: 'Gerald', email: 'gerald@yahoo.com', username: 'Gerald1932', password: 'secret9343' },
    { name: 'Henrietta', email: 'frank@yahoo.com', username: 'MsHenri', password: 'secret82top' },
]

newUsers.forEach((user) => {
    
    let sql = `INSERT INTO users (name, email, username, password)
    VALUES ('${user.name}','${user.email}','${user.username}','${user.password}')`;

    databaseConnection.query(sql, (error) => {
        if (error) {
            console.log(error);
        }
    });
});

// for (i = 0; i < newUsers.length; i++) {
//     databaseConnection.query(`INSERT INTO users (name, email, username, password) 
//     VALUES ('${newUsers[i].name}','${newUsers[i].email}','${newUsers[i].username}','${newUsers[i].password}')`, (error, rows) => {
//         if (error) {
//             console.log(error);
//         }
//         // rows.forEach(user => {
//         //     console.log(`${user.id} ${user.name} ${user.username}`);
//         // });
//     })
// }

databaseConnection.end((error) => console.log('TERMINATED THE DATABASE CONNECTION'));