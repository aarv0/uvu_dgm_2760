// Document SetUp DOM
document.querySelector('#company').innerText = "Pizza Emporium"
document.querySelector('header > h2').innerText = "Literal Objects"

let message

const question = {
    stem: "Who is buried in Grant's Tomb?",
    option1: "Tom",
    option2: "Grant",
    option3: "Sally",
    option4: "Bob",
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        // display the question options here
    },
    check: (userChoice) => {
        if (userChoice === question.correct)
        document.querySelector("feedback").textContent = "You are correct!"
    }   // else...
}

document.querySelector('#answer1').addEventListener('click,' () => question.check(1))
document.querySelector('#answer2').addEventListener('click,' () => question.check(2))
document.querySelector('#answer3').addEventListener('click,' () => question.check(3))
document.querySelector('#answer4').addEventListener('click,' () => question.check(4))


question.display()