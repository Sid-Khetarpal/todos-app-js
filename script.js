const inputitem = document.querySelector("#todoinput")
const boxitem = document.querySelector("#todobox")

inputitem.addEventListener('keyup', function (e) {
    if(e.key == "Enter"){
        addTodo(this.value)
        this.value = ""
    }
})

const addTodo = (item) => {
    const listItem = document.createElement("li")

    listItem.innerHTML = `${item} <i class="fas fa-times"></i>`

    listItem.querySelector("i").addEventListener('click', function(){
        listItem.remove();
    })

    boxitem.appendChild(listItem)
}