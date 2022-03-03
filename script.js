let id = 0;
document.getElementById('Add').addEventListener('click', () => {
    let table = document.getElementById('books');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML=document.getElementById('Author').value; 
    row.insertCell(1).innerHTML=document.getElementById('Book-Title').value; 
    row.insertCell(2).innerHTML=document.getElementById("Rating").value;
    let action = row.insertCell(3);
    action.appendChild(createDeleteButton(id++));
    document.getElementById("Author").value = " ";

})

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = "btn btn-primary";
    btn.id = id;
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
