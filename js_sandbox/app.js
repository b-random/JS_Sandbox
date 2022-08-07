// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()...............................

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


//multiple elements selectors.............................


// const items = document.getElementsByClassName('collection-item');

//console.log(items[0].clientWidth);

// items[0].style.color = 'blue';
// items[0].textContent = 'blue';

//getElementsByTagName....................................

// let lis = document.getElementsByTagName('li');

// // function greener(){
// //   for(i=0;i < lis.length; i++){
// //   lis[i].style.color = 'green';
// // }}       or...

// lis = Array.from(lis);

// lis.forEach(function(li){
//   li.style.color = 'orange';
// })

//doc.querySelectorAll()..................................

// const items = document.querySelectorAll('li');
// //console.log(items[1].style.color='purple');
// const odder = document.querySelectorAll('li:nth-child(odd)');
// const evener = document.querySelectorAll('li:nth-child(even)');

// odder.forEach(function(i){
//   i.style.color = 'green'
// });

// for(let x=0; x < evener.length; x++){
//   evener[x].style.background = 'grey';
//};

//Traversing the DOM......................................

let val;

const list = document.querySelector('ul.collection');

val = list;
//get child nodes

val = list.childNodes; //returns node called text that acts as linebreak

//iterate through a node list by index

val = list.childNodes;
val = list.childNodes[1].nodeName;
val = list.childNodes[10].nodeType; 
//see node type return values:

// 1 = Element
// 2 = Attribute (deprecated)
// 3 - Text nodeName
// 8 = Comment
// 9 - Document itself
// 10 = Doctype


val = list.children;
//val = list.children[0];
//val[0].textContent = 'hello';
val = list.children[3].children[0]; //reurns <a

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;

val = list.childElementCount;



//get .Children element nodes i.e. w/o text. returns html-collection
//val = list.children;

//get parent node


const listItem = document.querySelector('li.collection-item:first-child');
val = listItem;


val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;


// .......................................................

//creating elements in the dom


{/*Add this html to the dom:

<li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
<i class="fa fa-remove"></i>
</a>
</li></> */}

//1. create the element

const li = document.createElement('li');
const link = document.createElement('a');

//create it with a class/id
li.className = 'collection-item';
li.id = 'new-id';
link.className = "delete-item secondary-content"

//to add content that is actual html, but no text nodes or links (<i class="fa fa-remove"></i>)...
link.innerHTML = '<i class="fa fa-remove"></i>';
//innerHTML returns just the human readable text, while textContent will return the element tags as well

//create a text node toappend the new element with text
li.appendChild(document.createTextNode('NEW ITEM'));

li.appendChild(link);

//changes to this point are only seen in the console. to push these changes to the page...
document.querySelector('ul.collection').appendChild(li);



















console.log(link);


































