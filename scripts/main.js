let workButton = document.getElementById("Work");
let personalButton = document.getElementById("Personal");
let noneButton = document.getElementById("None");
let myHeading = document.querySelector("h1");
let myBody = document.querySelector("body");
let myImg = document.querySelector("img");
let myMode = localStorage.getItem('test-container-mode');

function setContainerToWork() {
		myHeading.textContent = "This is a Work Container!";
		myBody.setAttribute("bgcolor", "#7070db");
		myImg.setAttribute("src", "img/Suitcase.png");
		document.querySelector("title").innerText = "Work Container";
		localStorage.setItem("test-container-mode", "work");
}

function setContainerToPersonal() {
		myHeading.textContent = "This is a Personal Container!";
		myBody.setAttribute("bgcolor", "#b366ff");
		myImg.setAttribute("src", "img/Fingerprint.png");
		document.querySelector("title").innerText = "Personal Container";
		localStorage.setItem("test-container-mode", "personal")
}

function setContainerToNone() {
		myHeading.textContent = "This is in No Container!";
		myBody.setAttribute("bgcolor", "#ffb366");
		myImg.setAttribute("src", "img/Firefox-Logo.png");
		document.querySelector("title").innerText = "No Container";
		localStorage.setItem("test-container-mode", "none");
}

if(!myMode || myMode == "none") {
		setContainerToNone();
}
else if (myMode == "work") {
		setContainerToWork();
}
else if (myMode == "personal") {
		setContainerToPersonal();
}

workButton.onclick = function() {
		setContainerToWork();
}

personalButton.onclick = function() {
		setContainerToPersonal();
}

noneButton.onclick = function() {
		setContainerToNone();
}
