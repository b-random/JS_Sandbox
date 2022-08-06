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

// document.querySelector()

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


//multiple elements selectors


// const items = document.getElementsByClassName('collection-item');

//console.log(items[0].clientWidth);

// items[0].style.color = 'blue';
// items[0].textContent = 'blue';

//getElementsByTagName

// let lis = document.getElementsByTagName('li');

// // function greener(){
// //   for(i=0;i < lis.length; i++){
// //   lis[i].style.color = 'green';
// // }}       or...

// lis = Array.from(lis);

// lis.forEach(function(li){
//   li.style.color = 'orange';
// })

//doc.querySelectorAll()

const items = document.querySelectorAll('li');
//console.log(items[1].style.color='purple');
const odder = document.querySelectorAll('li:nth-child(odd)');
const evener = document.querySelectorAll('li:nth-child(even)');

odder.forEach(function(i){
  i.style.color = 'green'
});

for(let x=0; x < evener.length; x++){
  evener[x].style.background = 'grey';
};
































