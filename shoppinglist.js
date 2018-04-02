var addButton = document.getElementById('submitItem');

var list = document.getElementById("list");




function addItem() {
    var input = document.getElementById("Items").value;
    var item = document.createElement("li");
    item.textContent = input;
    list.appendChild(item);
var remove = document.createElement("button");
remove.textContext = "Delete";
item.appendChild(remove);


function deleteItem() {
    remove.parentNode.remove();
}
remove.addEventListener('click', deleteItem)
}
addButton.addEventListener('click', addItem);

