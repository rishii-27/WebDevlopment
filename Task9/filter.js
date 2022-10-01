var form = document.getElementById('addForm');
console.log(form)
var itemList = document.getElementById('items');
console.log(itemList)
var filter = document.getElementById('filter');
console.log(filter)

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
    li.appendChild(deleteBtn);

    // Append li to itemList: Display
    itemList.appendChild(li);
}

// On clicking X
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you want to Delete item?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

// On Search item
filter.addEventListener('keyup', searchItem)

function searchItem(e) {
    // Convert text to lowerCase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    })
}