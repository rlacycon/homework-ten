// HTML Event Handler
const oldSchool = () => {
  // Print comment under HTML Event Handler bullet point
  document.getElementById("htmlEH").innerText =
    "This is bad practice. Don't use this one. ";
};

// Traditional DOM Handler
const tradText = () => {
  // Print comment under Traditional Event Handler bullet point
  document.getElementById("traditional").innerText =
    "You can only attach one function to this event handler.";
};

document.getElementsByTagName("input")[1].onclick = tradText;

// Level 2 Event Listener
const alertMe = () => {
  // Run alert that reads Use this!
  alert("Use This!");
};

const level2Text = () => {
  // Text under level 2 bullet
  document.getElementById("level2").innerHTML =
    "You can attach one or more functions to this event handler";
};

const addNums = (x, y = 0) => {
  // Add two numbers together and print the equation
  document.getElementById("level2").innerHTML += `<br/>${x} + ${y} = ${x + y}`;
};

const level2Button = document.getElementsByTagName("input")[2];

level2Button.addEventListener(
  "click",
  () => {
    alertMe();
    level2Text();
    addNums(7, 5);
    addNums(36);
  },
  false
);

// UI Event
const pageURL = document.URL;
const lastModified = document.lastModified;

const displayInfo = () => {
  // Display URL and update date
  document.getElementById("pageURL").innerText = `Page URL: ${pageURL}`;
  document.getElementById("myLastUpdate").innerText = `Last Update: ${lastModified}`;
};

window.addEventListener("load", displayInfo);

// Keyboard Event
const myText = document.getElementsByTagName("input")[3];
let keyCount = 0;

const countKeys = () => {
  // Increase key count and print out results
  keyCount++;
  document.getElementById("pressNumber").innerText = `You have pressed a key ${keyCount} times.`;
};

myText.addEventListener("keydown", countKeys);

// Mouse Event
const mouseText = document.getElementById("danger");

const changeText = () => {
  // Change paragraph text
  mouseText.innerHTML = "<b>You have changed the text.</b>";
};

mouseText.addEventListener("dblclick", changeText);

// Focus Event
const focusText = document.getElementsByClassName("blurText")[0];

const changeToUpper = () => {
  // Change text to uppercase
  focusText.style.textTransform = "uppercase";
};

focusText.addEventListener("blur", changeToUpper);

// Form Events
const dropD = document.getElementById("js");
const ddText = document.getElementById("selectText");

const selectedChoice = () => {
  // Print different text according to dropdown selection
  const yourChoice = dropD.options[dropD.selectedIndex].value;
  let printChoice;

  switch (yourChoice) {
    case "javascript":
      printChoice = "Javascript is the base for all of these.";
      break;
    case "jQuery":
      printChoice = "You will learn jQuery in another web course.";
      break;
    case "Angular":
      printChoice = "Angular is a very popular Javascript framework.";
      break;
    case "React":
      printChoice = "You will learn React in advanced web courses.";
      break;
    default:
      printChoice = "Please make a selection.";
      break;
  }

  ddText.innerText = printChoice;
};

dropD.addEventListener("change", selectedChoice);

// Add/Delete List
const addBtn = document.getElementsByTagName("button")[0];
const itemList = document.getElementById("myList");

const addItem = () => {
  // Add item to existing list
  const newItem = prompt("Add Item:");
  const newLi = document.createElement("li");
  const newLiText = document.createTextNode(newItem);
  newLi.appendChild(newLiText);
  itemList.appendChild(newLi);
};

addBtn.addEventListener("click", addItem);

const deleteItem = (e) => {
  // Delete clicked on item from list
  const target = e.target;
  const targetParent = target.parentNode;
  targetParent.removeChild(target);
};

itemList.addEventListener("click", deleteItem);