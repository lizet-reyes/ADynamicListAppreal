var addButton = document.getElementById('submitItem');
var deleteButton = document.getElementById('deleteItem');





function addItem() {
    var list = document.getElementById("list");
    var input = document.getElementById("Items");
        var item = document.createElement("li");
            item.textcontent = input;
    list.appendChild(item);
}

function deleteItem(){
    var list = document.getElementById("list");
    var input = document.getElementById("Items");
    var item = document.getElementById(input.value);
    list.removeChild(item);
}
