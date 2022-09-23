var listItems = document.getElementsByTagName('li');

console.log(listItems);
listItems[2].style.backgroundColor = 'green';

for (let i=0; i<listItems.length; i++){
    listItems[i].style.font = 'bold 20px arial'
    listItems[i].style.color = 'red'
}