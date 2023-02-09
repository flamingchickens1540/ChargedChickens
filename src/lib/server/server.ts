import mysql from "mysql2/promise";

export const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db'
})

connection.connect();

//@ts-ignore
connection.query('SELECT * FROM table', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
})

connection.end();