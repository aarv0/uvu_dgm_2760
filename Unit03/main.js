// pick a random number between 0 and 16

console.log(Math.PI)

const correctNumber = Math.floor(Math.random() *15)

console.log(`The correct number is ${correctNumber}`)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1


function evalGuess() {
    totalGuesses += 1 // totalGuesses = totalGuesses +1
    gamerGuess = document.querySelector('#guess').nodeValue
    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log(`gamerGuess is equal to correctNumber`)
        feedback.innerText = 'You win!'
        giveAward()
    } else if (gamerGuess > correctNumber) {
        feedback.innerText = 'too high, try again'
    } else if (gamerGuess < correctNumber) {
        feedback.innerText = 'too low, try again'
    } else {
        feedback.innerText = 'Please choose a number between 1 and 15 and try again'
        totalGuesses -= 1
    }
        document.querySelector('#attempts').innerText = totalGuesses
}

function giveAward() {
console.log('Congratualtions!')

switch(totalGuesses) {
    case 1: 
    case 2: 
    case 3: 
        console.log('Blue ribbon for you!')
        break;
    case 4:
        console.log('Case 4 just happened')
        break;
    case 5:
    case 6:
 }

const awardImage = document.createElement('img') //Creates an <img> element

const ribbon = document.querySelector('#ribbon')

ribbon.appendChild(awardImage)

}