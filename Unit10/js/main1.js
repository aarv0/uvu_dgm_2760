function duplicateMenu() {
    // get all of the anchor elements from the top menu
let topList = document.querySelectorAll('ul#primaryNavigation li a')
// topList is the topMenu

// create the new list items for the bottom of the page
let newList = document.createElement('ul')

topList.forEach(menuItem => {
    let newLI = document.createElement('li')
    // newLI is new list item
    let newLink = document.createElement('a')
    // newLink is the new anchor tag
    // make new a tag for new list and get text
    newLink.setAttribute('href', menuItem.getAttribute('href'))
/* added js */
   newLink.textContent = menuItem.textContent

    // modify the.. 'copy' the textContent from upper menu to new menu
    // append children to make them appear in the DOM
/* added js */
    document.querySelector('#smallNavArea').appendChild(newList)
    newList.appendChild(newLI)
    newLI.appendChild(newLink)
})
// fat arrow functions are perfect for callback functions
}

duplicateMenu()