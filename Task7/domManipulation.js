
// parentElement
var itemList = document.querySelector('#items')
// console.log(itemList)
// console.log(itemList.parentElement.parentNode)
console.log(itemList.parentElement)
itemList.parentNode.style.backgroundColor = 'yellow'

// childNode
console.log(itemList.childNodes)
console.log(itemList.children)
itemList.children[1].style.backgroundColor = 'red'

// lastelementchild
console.log(itemList.lastElementChild)

// lastchild
console.log(itemList.lastChild)

// createchild
var createChild = document.createTextNode('Item 6')
itemList.appendChild(createChild)

// firstelementchild
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = "Item Changed"

// firstchild
console.log(itemList.firstChild)

// nextsibling
console.log(itemList.nextSibling)

// nextelementsibling
console.log(itemList.nextElementSibling)

// previoussibling
console.log(itemList.previousSibling)

// previouselementsibling
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color = 'green'

// createelement
var newDiv = document.querySelector('div')
console.log(newDiv)

// setAttribute
newDiv.setAttribute('title', 'Hello DIV')

// createtesxtnode
var newDivText = document.createTextNode("Hello World")
console.log(newDivText)

// appendchild
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
console.log(container)

// --------------------------------------------------
var h1 = document.querySelector('header h1')
console.log(h1)
// container.insertBefore(newDiv ,h1)
newDiv.style.fontSize = '30px'