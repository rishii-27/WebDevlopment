// On clicking the delete button we should be able to remove the newly created li tag
// Now add an edit button next to the delete icon.[Dont have to build the functionality]

var form = document.getElementById('addForm');
console.log(form)
var itemList = document.getElementById('items');
console.log(itemList)

// On clicking Submit
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    // Get Value
    var newItemValue = document.getElementById('item').value;
    // Create li
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add value to list
    li.appendChild(document.createTextNode(newItemValue));

    // Create Delete
    var deleteBtn = document.createElement('button');
    // Add Class
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append Text
    deleteBtn.appendChild(document.createTextNode('X'));
    // Add Button to li
    li.appendChild(deleteBtn)

    // Create Edit
    // var editBtn = document.createElement('button')
    // editBtn.appendChild(document.createTextNode('Edit'));

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    // Append li to itemList: Display
    itemList.appendChild(li);
}

itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you want to Delete item?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

itemList.addEventListener('click', editItem);

function editItem(e) {
    if (e.target.classList.contains('edit')) {
        alert('You clicked Edit')
    }
}
