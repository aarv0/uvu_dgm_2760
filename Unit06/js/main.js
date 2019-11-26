// function tellStory () {
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

document.querySelector('#storyButton').onclick = tellStory

console.log()
