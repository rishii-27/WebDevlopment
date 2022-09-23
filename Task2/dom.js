// Document Object :

// console.log("Helloooo")
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = '123'
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent = 'Hello DOM';
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)

// Selectors :

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = "Welcome"
// headerTitle.innerText = "Goodbye"
// console.log(headerTitle.textContent)
// console.log(headerTitle.innerHTML)
// console.log(headerTitle.innerText)
// headerTitle.innerHTML = '<h3> Dom Manipulation </h3>'

// var header = document.getElementById('main-header')
// header.style.border = "solid 3px black"

// getElementsByClassName

// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// items[1].style.fontWeight ="bold"
// items[1].style.backgroundColor ="red"


// querySelector

var addItems = document.querySelector('h2')
console.log(addItems)
addItems.style.fontWeight = 'bold'
addItems.style.color = 'yellow'