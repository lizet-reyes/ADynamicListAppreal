var addButton = document.getElementById('addItem');

var list = docuemnt.getElementById("list");




function addItem() {
    var input = document.getElementById("Items").value;
        var item = document.createElement("li");
            item.textcontent = input;
    list.appendChild(item);
}
