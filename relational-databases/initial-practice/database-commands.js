const mysql = require('mysql');

const databaseConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'LiaoSha831106',
    database: 'apple'
});


function sell (tableName, keyInt) {
    let sql = `UPDATE ${tableName} SET inventory = ${tableName.inventory - 1}
    WHERE id = ${keyInt}`;

    databaseConnection.query(sql, (error) => {
        if (error) {
            console.log(error);
        }
    });
    // databaseConnection.end((error) => console.log('TERMINATED THE DATABASE CONNECTION'));
}

function restock (tableName, keyInt, number) {
    let sql = `UPDATE ${tableName} SET inventory = ${tableName.inventory + number}
    WHERE id = ${keyInt}`;

    databaseConnection.query(sql, (error) => {
        if (error) {
            console.log(error);
        }
    });
    // databaseConnection.end((error) => console.log('TERMINATED THE DATABASE CONNECTION'));
}

function addProduct (tableName, newProduct) {
    // let databaseKeys = Object.keys(database);
    
    let sql = `INSERT INTO ${tableName} (device, color, price, display, storage)
    VALUES ('${newProduct.device}','${newProduct.color}','${newProduct.price}','${newProduct.display}','${newProduct.storage}')`;

    databaseConnection.query(sql, (error) => {
        if (error) {
            console.log(error);
        }
    });
    // databaseConnection.end((error) => console.log('TERMINATED THE DATABASE CONNECTION'));
}

function removeProduct (tableName, keyInt) {
    let sql = `DELETE FROM ${tableName}
    WHERE id = ${keyInt}`;

    databaseConnection.query(sql, (error) => {
        if (error) {
            console.log(error);
        }
    });
    // databaseConnection.end((error) => console.log('TERMINATED THE DATABASE CONNECTION'));
}

function checkAllProducts (tableName) {
    let sql = `SELECT * FROM ${tableName}`;

    let inventory = databaseConnection.query(sql, (error) => {
        if (error) {
            console.log(error);
        }
    });
    return inventory.stringify();
    // databaseConnection.end((error) => console.log('TERMINATED THE DATABASE CONNECTION'));
}

function checkSingleProduct (tableName, device) {
    let sql = `SELECT DISTINCT ${device} FROM ${tableName}`;

    databaseConnection.query(sql, (error) => {
        if (error) {
            console.log(error);
        }
    });
    // databaseConnection.end((error) => console.log('TERMINATED THE DATABASE CONNECTION'));
}

module.exports = {
    sell,
    restock,
    addProduct,
    removeProduct,
    checkAllProducts,
    checkSingleProduct,
}