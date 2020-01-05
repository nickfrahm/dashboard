let id = 0; //initializes the items
let currColor = 0; //initializes current color as red
let colors = [1, 2, 3]; //declares color ID array
let items = []; // initializes the array of objects in the list

//main function for adding items
let add = function () {
  let text = document.querySelector("#txt-addItem").value;
  if (text == "") {
    alert("You didn't add a task");
  } else {
    addToList(getItem());
  }
}

let enter = document.getElementById("txt-addItem");
enter.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    add();
  }
});

//grabs the item from the text input when the add button is clicked
function getItem() {
  let item = document.querySelector("#txt-addItem").value;
  let newItem = new Item(id, item, colors[currColor]);
  id++;
  currColor++;
  if (currColor > 2) {
    currColor = 0;
  }

  document.querySelector("#txt-addItem").value = "";

  return newItem;
}

function addToList(newItem) {
  items.push(newItem);
  let getTask = newItem.item; //gets this specific task's detail
  let getID = newItem.id; //gets the ID for the items spot in the index
  let getColor = newItem.colorID; //gets the background color for the added element

  let htmlList = document.getElementById("myList"); //gets the DOM list
  let newLI = document.createElement("li"); //creates a new element to throw in the DOM
  let liText = getTask; // creates the text for the DOM
  newLI.innerHTML = liText; //adds that text into the new list item
  if (getColor == 1) { // sets bg color to red and gives the li an id for deleting
    newLI.setAttribute("class", "r");
    newLI.setAttribute("id", getID);
    newLI.setAttribute("onclick", "remove(" + getID + ")");
  } else if (getColor == 2) {
    newLI.setAttribute("class", "b"); // sets bg color to blue and gives the li an id for deleting
    newLI.setAttribute("id", getID);
    newLI.setAttribute("onclick", "remove(" + getID + ")");
  } else if (getColor == 3) {
    newLI.setAttribute("class", "g"); // sets bg color to green and gives the li an id for deleting
    newLI.setAttribute("id", getID);
    newLI.setAttribute("onclick", "remove(" + getID + ")");
  }

  htmlList.appendChild(newLI);
  document.getElementById(getID).style.cursor = "pointer";
  console.log(getID);
}
