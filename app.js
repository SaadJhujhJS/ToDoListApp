const additem=document.querySelector("#item")
const todolist=document.querySelector("#to-do-list")
additem.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        addtodo(this.value)
        this.value=""
    }
})

const addtodo=(additem)=>{
    const listitem=document.createElement("li")
    listitem.innerHTML=`
    ${additem}
    <i class="delete fas fa-times"></i>
    `   

    listitem.addEventListener("click",function(){
        this.classList.toggle("done")
    })
    listitem.querySelector(".delete").addEventListener("click",function(){
        listitem.remove()
    })
    todolist.appendChild(listitem)
}
