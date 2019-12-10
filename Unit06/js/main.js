function tellStory() {
    //nounArray = querySelector(noun)
    //lower case String split()
    //repeat
    var nounArray = document.querySelector('#noun').value.trim().split(/\s+/)
    
    console.log(noun)

    var adjectiveArray = document.querySelector('#adjective').value.trim().split(/\s+/)
    
    console.log(adj)

    var verbArray = document.querySelector('#verb').value.trim().split(/\s+/)
    
    console.log(verb)


    //make nouns lowercase
    var lowNounArray = nounArray.map(v => v.toLowerCase())

    console.log(lowNounArray);

    //make verbs lowercase
    var lowVerbArray = verbArray.map(v => v.toLowerCase())

    //make adjectives lowercase
    var lowAdjArray = adjectiveArray.map(v => v.toLowerCase())

    const myStory = `Once upon a time there were four ${lowNounArray[0]}s named Ross, Joey, Chandler and Ben. They 
    were ${lowAdjArray[0]} ${lowNounArray[0]}s who loved to ${lowVerbArray[0]}. One day they went to the ${lowNounArray[1]}. After they watched all the 
    ${lowAdjArray[1]} ${lowNounArray[4]} ${lowVerbArray[1]} the ${lowNounArray[1]} caught on ${lowNounArray[2]}. Then Ross, Joey, Chandler and Ben went home to ${lowVerbArray[0]} some more and eat
    ${lowNounArray[5]}.`

    // get a reference to the querySelector('#story') = myStory

    let storyContainer = document.querySelector('#storyP')
    storyContainer.textContent = myStory
}




/*/ function tellStory () {
    //nounArray = querySelector('#noun') // lowercase String split ()
    // repeat for adjectives and verbs

    // const myStory = `Once upon a time there were four ${nounArray[0]}s named Flopsy, Mopsy... etc.`
}


document.querySelector('company').innerText = "Nonsense Story"

document.querySelector('#slogan').innerText = "String Manipulation"

// Fuction
function tellStory(){
    let nounString = document.querySelector('#nouns').value
    nounString.toLowerCase()
    nounArray = nounString.split(/\s+/)
    
    let adjectiveString = document.querySelector('#adjs').value
    adjectiveString.toLowerCase()
    adjectiveArray = adjectiveString.split(/\s+/)

    let verbString = document.querySelector('#verbs').value
    verbString.toLowerCase()
    verbArray = verbString.split(/\s+/)
 
    let storyArea = `Once upon a ${nouns[0]}, 
    there were three little pigs. The first little pig was very 
    ${adjectives[0]}, and he built a house out of
     ${nouns[1]}s. The second little pig was ${adjectives[1]},
      and he built his house out of ${nouns[2]}s. But the third 
      little pig was very ${adjectives[2]}, and he built his house 
      out of ${nouns[3]}s. One day all the pigs were ${verbs[0]}ing 
      and ${verbs[1]}ing. All of the sudden a ${nouns[4]} came and
       ${verbs[2]}ed on all of their houses.
    
    
    `
    console.log(nouns, adjectives, verbs)
}


document.querySelector('#tellStory').addEventListener('click', makeStory)


    
document.querySelector('#storyP').textContent = storyArea

}

document.querySelector('#tellStory').onclick = tellStory

console.log()
