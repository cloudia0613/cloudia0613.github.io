var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image005.png") {
    myImage.setAttribute("src", "images/image007.png");
  } else {
    myImage.setAttribute("src", "images/image005.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "This is a website showing the concept of cute artAI models, " + myName;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "This is a website showing the concept of cute artAI models," + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };

