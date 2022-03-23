//handles save to ul list
document.querySelector("#save").onclick = function(){

    let name = document.querySelector("#name").value //et the input value
    if(name.length == 0){

alert("Please enter name to continue")
}else {
let object = {name: name}
localStorage.setItem("todo_name", JSON.stringify(object))
let tdname = JSON.parse(localStorage.getItem("todo_name")).name
if(tdname !== null){
 
    let li = document.createElement('li')
    li.setAttribute('class', 'list-group-item')
    li.appendChild(document.createTextNode(tdname))

document.querySelector(".list-group").appendChild(li)
let savetab= [], lis = document.querySelectorAll(".list-group-item")
for(let x = 0; x<lis.length; x++){
    
savetab.push(lis[x].innerHTML)
  
}

localStorage.setItem("save_td", JSON.stringify({value: savetab}))
document.querySelector("#name").value = ' '
}
}


}


//gets saved values after reoload
if(localStorage.getItem("save_td") !== null){
    let savedtd = JSON.parse(localStorage.getItem("save_td")).value
    for(let x = 0; x< savedtd.length; x++){
        let li = document.createElement('li')
        li.setAttribute('class', 'list-group-item')
        li.appendChild(document.createTextNode(savedtd[x]))
    
    document.querySelector(".list-group").appendChild(li)
    
    }
}


//clears app
document.querySelector("#clear").onclick = function(){ 
    localStorage.clear()
    window.location.reload()
}


