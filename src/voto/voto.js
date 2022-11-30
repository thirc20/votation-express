const { connect } = require("../../db")
const db = require('../../db')

module.exports.voto = async (inforVoto)=>{
    let votoVerificado = await verificarVotoExistente(inforVoto)
    
    if(votoVerificado == "livre"){
        return await novoVoto(inforVoto)
    }else{
        return "Você já votou!"
    }

}

async function verificarVotoExistente(inforVoto){
    let votoExistente = await findOne(inforVoto.nomeAluno)
    if(votoExistente.message == "Voto ainda não realizado"){
        return "livre"
    }
    else{
        return "Voto já realizado!"
    }

}

async function findOne(nome){
    let votoExistente = await db.selectAll()

    for(let count = 0; count < votoExistente.length; count++){
        if(votoExistente[count].nomeAluno == nome){
            return {
                nomeAluno: votoExistente[0].nomeAluno,
                raAluno: votoExistente[0].raAluno,
                votoProf: votoExistente[0].votoProf
            }
        }
    }
    return {
        message: "Voto ainda não realizado"
    }
}

async function novoVoto(voto){
    let votoSalvo = await db.votar(voto)

    return {
        nomeAluno: votoSalvo.nomeAluno,
        raAluno: votoSalvo.raAluno,
        votoProf: votoSalvo.votoProf
    }
}