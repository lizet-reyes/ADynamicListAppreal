var addButton = document.getElementById('submitItem');
var list = docuemnt.getElementById("addItem ");




function addItem (){
    var input = document.getElementById("Birthday").value;
    var item = document.createElement("li");
    item.textcontent = input;
    list.appendChild(item);
}
