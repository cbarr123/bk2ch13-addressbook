// todo RTeference to DOM Element
// todo event listener
// todo get data
// todo HTML representtion
// todo Render to DOM
const addressContainer = document.querySelector("#addressList")
const htmlRep = (name, address) => {
    return `
    <div>
    <h3>${name}</h3>
    <p>${address}</p>
    </div>
    `
}

document.querySelector("#saveEntry").addEventListener("click", ()=>{
    const name = document.querySelector("#fullName").value
    const address = document.querySelector("#address").value
    console.log("hello")
    console.log(name)

    const personalAddress = htmlRep(name, address)
    console.log(personalAddress)
    addressContainer.innerHTML += personalAddress
})



