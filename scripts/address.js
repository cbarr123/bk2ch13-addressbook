// todo Reference to DOM Element
// todo event listener
// todo get data
// todo HTML representation
// todo Render to DOM
// todo I can purchase {thing} at {location}
const addressContainer = document.querySelector("#addressList")
const favContainer = document.querySelector("#favThings")

const htmlRep = (name, address) => {
    return `
    <div>
    <h3>${name}</h3>
    <p>${address}</p>
    </div>
    `
}
const favHTMLRep = (favoriteThing, whereToPurchase) => {
    return `
    <div>
    <h3>${favoriteThing}</h3>
    <p>${whereToPurchase}</p>
    <p>I can purchase ${favoriteThing} at ${whereToPurchase}.</p>
    </div>
    `
}



document.querySelector("#saveEntry").addEventListener("click", ()=>{
    const name = document.querySelector("#fullName").value
    const address = document.querySelector("#address").value
    console.log(name)
    const personalAddress = htmlRep(name, address)
    console.log(personalAddress)
    addressContainer.innerHTML += personalAddress
    clearForm()
    
})

document.querySelector("#saveToWishList").addEventListener("click", () => {
    const favoriteThing = document.querySelector("#favoriteItem").value
    const whereToPurchase = document.querySelector("#purchaseLocation").value
    console.log(favoriteThing)
    const favCollection  = favHTMLRep(favoriteThing, whereToPurchase)
    console.log(favCollection)
    favContainer.innerHTML += favCollection
})

function clearForm () {
    document.querySelector("#fullName").value = ""
    document.querySelector("#address").value = ""
    console.log("name in clearForm():", document.querySelector("#fullName").value)
}



