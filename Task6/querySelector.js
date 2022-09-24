
// Make the 2nd item have green background color
// Make the 3rd item invisible

var secondItem = document.querySelector('li:nth-child(2)');
console.log(secondItem)
secondItem.style.backgroundColor = 'green'

// var thirdItem = document.querySelector('li:nth-child(3)');
// thirdItem.style.display = 'none'

// Using QuerySelectorALL change the font color to red for 2nd item in the item list
// Choose all the odd elements and make their background yellow using QuerySelectorALL﻿

var listItems = document.querySelectorAll('.list-group-item')
console.log(listItems)
listItems[1].style.color = 'red'

var oddItems = document.querySelectorAll('li:nth-child(odd)')
console.log(oddItems)

for (let i = 0; i < oddItems.length; i++) {
    oddItems[i].style.backgroundColor = 'yellow'
}

// What is the difference between queryselector and queryselectorall?

// Ans: querySelector() methodcan only be used to access a single element while querySelectorAll() method can be used to access all elements which match with a specified CSS selector.