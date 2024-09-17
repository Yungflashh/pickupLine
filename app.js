const pickup = document.getElementById("pickup")
const category = document.getElementById("category")


function fetchPickUp(){
    const rawData = fetch("https://rizzapi.vercel.app/random");
    const jsonData = rawData.then(data => (data.json())
)


    jsonData.then(data => {
       
        category.innerText = `Category : ${data.category}`
        }
    )
    
    
    jsonData.then(data => pickup.innerText = ` Line : ${data.text}`)

}