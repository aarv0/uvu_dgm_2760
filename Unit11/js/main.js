document.querySelector('#company').innerText = "Hotel California"
document.querySelector('header > h2').innerText = "You won't ever leave "



async function getHotelData() {
    try {
        const response = await fetch('../hotel.json')
        return await response.json() // Return the JSON object
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)





// store in a variable document.querySelectorAll("a")
// use that variable to loop
document.querySelector("#marriott").addEventListener('click', hotelInfo)
document.querySelector("#sheraton").addEventListener('click', hotelInfo)
document.querySelector("#hilton").addEventListener('click', hotelInfo)

//function hotelInfo(event) {
//    console.log(event.target.id)
//}
function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)
    
    document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`
    
    document.querySelector("#address").textContent = `${hotelChoice.address}`
    
    document.querySelector("#rooms").textContent = `${hotelChoice.rooms}`
    
    document.querySelector("#gym").textContent = `${hotelChoice.gym}`
    
    document.querySelector("#type").textContent = `${hotelChoice.roomTypes}`

    let imagePath = `${hotelChoice.picture}`

    document.querySelector("#picture").setAttribute('src', imagePath)

}


 //   let imagePath = `${hotelChoice.picture}`

//    document.querySelector("#picture").setAttribute('src', imagePath)

//}

//hotelData = data
//console.log (hotelData)
// console.log (hotelData) // returns an empty object
// console.log(getHotelData().then(data => {
    //return hotelData = data
//}))
// console.log(hotelData)