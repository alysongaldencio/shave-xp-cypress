const { Pool } = require('pg')

const dbConfig = {
    host: 'babar.db.elephantsql.com',
    user: 'wejhjefc',
    password: 'VRPKGK0H3qB8Qh3r1PqO4gTn-Y1r0LRc',
    database: 'wejhjefc',
    port: 5432

}


module.exports = {
    removeUser(email) {
        return new Promise(function (resolve) {
            const pool = new Pool(dbConfig)

            pool.query('DELETE FROM users WHERE email = $1', [email], function (error, result) {

                if (error) {
                    throw error
                }
                resolve({ sucess: result })

            })

        })




    }
}