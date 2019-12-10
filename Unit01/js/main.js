
//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast";

document.querySelector('#company').innerText = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerText = "Best B&B this side of Orem!"

let userName = prompt("What is your name?")


var askforName = prompt("Enter Your Name");


var myCup = "Welcome " + askforName;
document.getElementById("whatisyourname").innerHTML = myCup;

//let message = "Hello" + userName + ", welcome to the best lodging in Utah"

let message = `Hello ${userName}, welcome to the finest lodging  in Utah County`

document.querySelector('#greeting').innerText - message 