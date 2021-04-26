document.getElementById("addBtn").addEventListener("click", addText);

function addText(){
var listItem = document.createElement("li");
listItem.innerText = document.getElementById("myInput").value;
document.getelementById("myUl").appendChild(listItem);
  
}
{
//delete button
var deleteButton = document.createElement('button');
deleteButton.className = "delete";
deleteButton.oneclick=removeText; 
deleteButton.innerText = "x";
listItem.appendChild(deleteButton);
}

function removeText(){
  var listItem=this.parentNode;
  var ul=listItem.parentNode;
  u1.removeChild(listItem);
}
