// Array with 4 trees listed
const trees = ['Oak', 'Pine', 'Aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')


// Display tree list inside displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span> ${trees.length} elments long</span>`
}


listTrees()

const lowerTrees = trees.map(function(tree) {
    return tree.toLowerCase()
})
// Add a redwood to the end to old way
/*var addTreeStart = function() {
    trees.push("redwood");
    listTrees();

};
var redwood = document.getElementById('add_redwood');
redwood.onclick = addTreeStart; */

// Add a Redwood Tree to the end (More concise version)
document.querySelector('#add_redwood').onclick = () => {
    trees.push('Redwood')
    listTrees()
}

//Add pear to start of list
document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
}

//Remove the first tree
document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift('')
        listTrees()
    }
    else (
        errorElement.textContent = 'No trees to remove. Try adding one.'
    )
}

//Remove the second tree
document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) { //if (trees.length > 0) {
        trees.splice(1, 1) //trees.splice(indexToRemove, numberToRemove);
        listTrees()
    }
    else (
        errorElement.textContent = 'No second tree to remove.'
    )
}

//Remove last tree in list
document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop('')
        listTrees()
    }
    else (
        errorElement.textContent = 'No more trees to remove. Try adding one.'
    )
}

//Sort array treeList a to z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}



//Make all trees lowercase
document.querySelector('#lowerCase').onclick = () => {
    
    const newListTrees = () => {
        let newTreeList = ''
        lowerTrees.forEach(tree => {
            newTreeList += `${tree} <br>`
        })
        displayResults.innerHTML = `${newTreeList} <span>${trees.length} elments long</span>`
    }
    
    newListTrees()

    //Sort array a to z
document.querySelector('#sortTrees').onclick = () => {
    lowerTrees.sort()
    newListTrees()
}
}

//Add Redwood to end of list
document.querySelector('#add_redwood').onclick = () => {
    trees.push('Redwood')
    listTrees()
}

// Make all the trees lower case
document.querySelector('#lowerTrees').onclick = () => {
    trees = trees.join(" <br>").toLowerCase()
    trees = trees.split(" ,")
    console.log(trees.length)
    listTrees()
}

// Display third tree
document.querySelector('#showName3').addEventListener('click', () => {
    if(trees.length >= 3) {
        thirdTree = trees[2];
        errorElement.textContent = thirdTree;
    } else {
        errorElement.textContent = "There isn't a third tree"
    }

})

// Display fourth tree
document.querySelector('#showName4').addEventListener('click', () => {
    if(trees.length >= 4) {
        fourthTree = trees[3];
        errorElement.textContent = fourthTree;
    } else {
        errorElement.textContent = "There isn't a fourth tree"
    }

})




/* //Display 3rd tree
document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
        const treeThree = trees[2]
        listTrees()
        errorElement.textContent = `The third tree is ${treeThree}`
    }
    else (
        errorElement.textContent = 'There is not a 3rd tree in the list. Try adding one.'
    )
}

//Display 4th tree
document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3) {
        const treeFour = trees[3]
        listTrees()
        errorElement.textContent = `The fourth tree is ${treeFour}`
    }
    else (
        errorElement.textContent = 'There is not a 4th tree in the list. Try adding one.'
    )

}
*/



/* //Show Name 3 in List
document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2){
        var numberthree = trees.slice(2,3)
        listTrees()
        document.getElementById("displayResults").innerHTML = numberthree;
    } else {
        errorElement.textContent = 'There is not a 3rd tree in you tree list'
    }
    }
    
    //Show Name 4 in List
    document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3){
        var numberfour = trees.slice(3,4)
        listTrees()
        document.getElementById("displayResults").innerHTML = numberfour;
    } else {
        errorElement.textContent = 'There is not a 4th tree in you tree list'
    }
    } */