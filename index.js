//projeto calculadora

let elo = saldoVitoria(20,5)

let nivel = ranking(elo)

var rank = ""

function ranking(){    


    if (elo <= 10){
        rank = "Ferro"
    }else if (elo<= 20){
        rank = "Bronze"
    }else if (elo <= 50){
        rank = "Prata"
    }else if (elo <= 80){
        rank = "Ouro"        
    }else if (elo <= 90){
        rank = "Platina"
    }else if (elo <= 100){
        rank = "Ascendente"    
    }else  
        rank = "Radiante" 

        

        return rank
}


function saldoVitoria(numA, numB){
    let sutbracao = numA - numB
    return sutbracao

}


console.log(`O heroi de nome tucão esponja tem um saldo de vitória de ${elo} e está no rank de nivel ${nivel}`)