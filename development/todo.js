
// Copyright (c) 2019 by Richard (https://codepen.io/barkins/pen/aEriL)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#addTask');

var toDo = document.querySelector(".todo-list ul");
var complete =  document.querySelector(".complete-list ul");



var createNewTask = function(task){

  var listItem = document.createElement("li"); //<li>
  var checkBox = document.createElement("input"); //checkbox
  var label = document.createElement("label"); // <label>


  label.innerText = task;

  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;

};

var addTask = function(){
  var listItem = createNewTask(newTask.value);
  toDo.appendChild(listItem);
  newTask.value="";

  bindIncompleteItems(listItem, completeTask);

};

var completeTask = function(){

  var listItem = this.parentNode;

  var deleteBtn = document.createElement("button"); // <button>
  deleteBtn.innerText ="Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  var checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();

  complete.appendChild(listItem);

  bindCompleteItems(listItem, deleteTask);

};

var deleteTask = function(){
  console.log("Deleting task...");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);

};

var bindIncompleteItems = function(taskItem, checkBoxClick){
  var checkBox = taskItem.querySelector("input[type=checkbox]");
  checkBox.onchange = checkBoxClick;
};


var bindCompleteItems = function(taskItem, deleteButtonPress){

  var deleteButton = taskItem.querySelector(".delete");

  deleteButton.onclick = deleteButtonPress;

};


for(var i=0; i < toDo.children.length; i++) {
  bindIncompleteItems(toDo.children[i], completeTask);
}

for(var i=0; i < complete.children.length; i++) {
  bindCompleteItems(complete.children[i], deleteTask);
}


addTaskBtn.addEventListener("click", addTask);
