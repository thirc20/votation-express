async function selectAll() {
    let mysql = require('mysql2/promise')

    let conn = await mysql.createConnection({
        host: "us-cdbr-east-06.cleardb.net",
        user: "b17fdffeac6708",
        password: "6bac8b1a",
        database: "heroku_6bb8b39f8bbe2fe",
        port: 3306
    })

    let consult = await conn.query('SELECT * FROM voto_entity;')
    conn.end()
    return consult
}

async function selectOne(infor) {
    let mysql = require('mysql2/promise')

    let conn = await mysql.createConnection({
        host: "us-cdbr-east-06.cleardb.net",
        user: "b17fdffeac6708",
        password: "6bac8b1a",
        database: "heroku_6bb8b39f8bbe2fe",
        port: 3306
    })
    
    const [rows] = await conn.query("SELECT * FROM voto_entity WHERE nomeAluno =" + `'${infor.nomeAluno}'` + " and raAluno = " + `'${infor.raAluno}'` + ";")
    conn.end()
    console.log(rows)
    return await rows
}

async function votar(infor) {
    let mysql = require('mysql2/promise')

    let conn = await mysql.createConnection({
        host: "us-cdbr-east-06.cleardb.net",
        user: "b17fdffeac6708",
        password: "6bac8b1a",
        database: "heroku_6bb8b39f8bbe2fe",
        port: 3306
    })

    const query = await conn.query(`INSERT INTO voto_entity (nomeAluno, raAluno, votoProf, curso) VALUES ('${infor.nomeAluno}', '${infor.raAluno}', '${infor.votoProf}', '${infor.curso}');`)
    conn.end()
    return await query
}

// INSERT INTO `heroku_6bb8b39f8bbe2fe`.`voto_entity` (`nomeAluno`, `raAluno`, `votoProf`) VALUES ('THIAGO', '3256', 'Joao');



module.exports = { selectAll, votar, selectOne }