let imgButton = document.getElementById("imageBtn")
console.log(imgButton)

const addAnImage = ()=>{
    let imgElem = document.createElement("img")
    imgElem.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1920px-SNice.svg.png"
    imgElem.alt = "smily face"

    mnElement.appendChild(imgElem)
}

imgButton.addEventListener("click", addAnImage)