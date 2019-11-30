// Document SetUp DOM
document.querySelector('#company').innerText = "Grant's Tomb"
document.querySelector('header > h2').innerText = "Literal Objects"



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
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
        document.querySelector('#answer3').textContent = question.option3
        document.querySelector('#answer4').textContent = question.option4

        
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
        document.querySelector(".feedback").textContent = "You are correct!"
        // fixed ("feedback") and changed to (".feedback")
        // document.querySelector(".feedback").style.backgroundColor  = "";
    }   // else...
    else {
        document.querySelector(".feedback").textContent = "Wrong answer. Try again?"
        // document.querySelector(".feedback").style.backgroundColor  = "";
    }
    }
}
document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))


question.display()