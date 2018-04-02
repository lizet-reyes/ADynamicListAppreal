function deleteItem(){
    var list = document.getElementById("list");
    var input = document.getElementById("Items");
    var item = document.getElementById(input.value);
    list.removeChild(item);
}
