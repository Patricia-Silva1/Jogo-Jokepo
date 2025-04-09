const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumeber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())


}

const playMachine = () => {
    const choices = ['Pedra', 'Papel', 'Tesoura']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]



}

const playTheGame = (human, machine) => {
    console.log('Humano:' + human + "Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"

    } else if (
        (human === 'Papel' && machine === 'Pedra') ||
        (human === 'Pedra' && machine === 'Tesoura') ||
        (human === 'Tesoura' && machine === 'Papel')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumeber++
        machineScore.innerHTML = machineScoreNumeber
        result.innerHTML = "Você perdeu para a Alexa!"
    }

}