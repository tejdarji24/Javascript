let newElement = document.createElement("div");
let innerElement = document.createElement("span");
newElement.appendChild(innerElement);
let txt = document.createTextNode("My name is tej");
innerElement.appendChild(txt);
document.getElementById('header').appendChild(newElement);