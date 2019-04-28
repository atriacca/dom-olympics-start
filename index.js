var h1 = document.createElement("h1");
h1.className = "header";
h1.textContent = "JavaScript made this!";

var sub = document.createElement("h4");
sub.innerHTML = "<span class='name'>Alan</span> wrote this."

var div = document.createElement("div");
div.className = "header";

div.appendChild(h1);
div.appendChild(sub);

document.body.prepend(div);

var messages = document.getElementsByClassName("message");
console.log(messages)

messages[0].textContent = "This message is way better and more fun than the default."
messages[1].textContent = "But it's not as fun as this one."
messages[2].textContent = "However, it depends on what the user deems to be fun."
messages[3].textContent = "I just know what fun means to me!"

document.getElementById("clear-button").addEventListener("click", clearAll);
function clearAll() {
    messages[0].textContent = "Clear."
    messages[1].textContent = "Also clear."
    messages[2].textContent = "Clear here too."
    messages[3].textContent = "All clear!"
}

//document.getElementById("theme-drop-down").

/*
var div2 = document.createElement("div");
div.className = "right left";


    <select id="theme-drop-down">
        <option value="theme-one">blue/brown</option>
        <option value="theme-two">red/black</option>

Use the drop down to write some JavaScript that will notice when the drop down has changed and then changes the background colors of the messages accordingly.

Feel free to edit the HTML <select> tag to make it more usable or elaborate. Mo themes, mo fun.


*/