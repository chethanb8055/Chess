let items =document.getElementById("items")
let userInput =document.getElementById("userInput")

// console.log(userInput)
function Create(){
  if(userInput.value==""){
      alert("Please Student Name")
  }else{
      let newLi = document.createElement("li")
      newLi.innerHTML =userInput.value
      items.appendChild(newLi)
      let newButton = document.createElement("button")
      newButton.innerHTML ="Delete"
      newLi.appendChild(newButton)
    }
    userInput.value =""
    Store()
}


items.addEventListener("click",(e)=>{
  console.log(e.target.tagName)
  if(e.target.tagName=="BUTTON"){
      e.target.parentElement.remove()
      Store()

  }
  else if(e.target.tagName ="LI"){
    e.target.classList.toggle("marking")
    Store()
  }
})

function Store(){
  localStorage.setItem("data",items.innerHTML)
}

function reStore(){
  items.innerHTML =localStorage.getItem("data")
}

reStore()