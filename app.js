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

function copyText() {
    
    const pickupElement = document.getElementById('pickup');
    const pickupText = pickupElement.innerText.trim();

 
    if (pickupText === "") {
        alert("Can't copy empty text");
        return;
    }

   
    const textarea = document.createElement('textarea');
    textarea.value = pickupText;
    document.body.appendChild(textarea);
    textarea.select();
    
    
    document.execCommand('copy');
    

    document.body.removeChild(textarea);
  
    alert('Pickup line copied to clipboard!');
}