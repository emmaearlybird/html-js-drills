/*****************************
 * Section 1 - Personal Info *
 *****************************
 */
function addName() {
  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'still Dirk';
}

function replaceImage() {
  let newImage = document.querySelector('#picture');
  newImage.src = "download.jpg";
}

function changeCodeStatus() {
  let nameElement = document.querySelector('#codestatus');
  nameElement.innerHTML = "<img src='https://i.pinimg.com/originals/4d/7e/e3/4d7ee3fc125a8e5423c16cec50a2a6eb.png' />";
}

let favElement = document.querySelector('#favthings');
  let li = document.createElement('li');
  let lii = document.createElement('li');
function addFavoriteThings() {
  favElement.appendChild(li);
  li.innerText = 'honored elders';
  favElement.appendChild(lii);
  lii.innerText='respectful children';
}

let showInfoButton = document.querySelector('#show-info-button');

showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************/
let informationForm = document.querySelector('#information-form');

informationForm.addEventListener('submit', function(event) {
  event.preventDefault();

let fname = document.getElementById('fname').value;
let lname = document.getElementById('lname').value;
let cars = document.getElementById('cars').value;
let icecreamyes = document.getElementById('icecreamyes').checked;
let human = document.getElementById('humancheck').checked;
let coder = document.getElementById('codercheck').checked;

document.getElementById('firstname').innerText = fname;
document.getElementById('lastname').innerText = lname;
document.getElementById('chosencar').innerText = cars;

if(icecreamyes) {
  document.getElementById('icecreamstatus').innerText = 'Yes';
}
else {
  document.getElementById('icecreamstatus').innerText = 'No';
}

if(human) {
  if(coder) {
        document.getElementById('checks').innerText = 'Human, Coder';
  }
  else {
    document.getElementById('checks').innerText = 'Human';
  }
}
else if(coder) {
      document.getElementById('checks').innerText = 'Coder';
}

});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************/
let consoleLogButton = document.querySelector('#console-log-button');

consoleLogButton.addEventListener('click', function() {
  console.log('Okay');
});

let makeBlueButton = document.querySelector('#make-blue-button');
makeBlueButton.addEventListener('click', function() {
  document.getElementById('colorText').style.color = "blue";
});

document.addEventListener('keydown', function() {
  if(event.code == 'KeyR') {
    document.getElementById("colorText").style.color = '#FF0000';
  }
  if(event.code == "KeyE") {
    document.getElementById("colorText").style.color = '#eb34e8';
  }
});

/*************************************
 * Section 4 - TODO List             *
 *************************************/

function makeToDoList() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("todo").value;
  let t = document.createTextNode(inputValue);
  let placeHolder = document.getElementById("toDoOne")
  li.appendChild(t);
  if (inputValue === '') {
    alert("I'm sure there's something you can do.");
  } else {
    document.getElementById("todos").appendChild(li);
  }
  document.getElementById("todo").value = "";

  let span = document.createElement("SPAN");
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************/

let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds);
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

// Your code goes here
