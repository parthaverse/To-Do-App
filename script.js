let todoList=[
  {
    item:'Study 4 hours', putDate:'18/08/2024'
  },
  {
    item:'Practice 2 hours', putDate:'18/08/2024'
  },
];
showItems();
function addTodo(){
  let inputElement=document.getElementById('to-do-input');
  let dateElement=document.getElementById('todoDate');
  let todoItem=inputElement.value;
  let toDate=dateElement.value;
  todoList.push({item:todoItem, putDate:toDate});
  inputElement.value='';
  dateElement.value='';
  showItems();
}
function showItems(){
  let containerElement=document.getElementById('todoContainer');
  let addNew='';
  for(let i=0;i<todoList.length;i++){
    let item= todoList[i].item;
    let putDate= todoList[i].putDate;
    addNew += `
    <div>
    <span>${item}</span>
    <span>${putDate}</span>
    <button onclick='todoList.splice(${i},1); showItems();'>Delete</button>
    </div>
    `;
  }
  containerElement.innerHTML=addNew;
}