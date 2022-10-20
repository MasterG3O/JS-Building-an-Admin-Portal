
// Your Code Here

async function saveShinobi(){
    let inputValue = document.getElementById("shinobi-input").value
    console.log("button clicked")
    let response = await fetch('http://localhost:3000/updateBook',{
        method: "PATCH",
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "id": 1,
            "quantify": inputValue
        })
    })
}
