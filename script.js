/*****************************
 * Section 1 - Personal Info *
 *****************************
 */
function addName() {
  console.log('Called addName()');
  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'still Dirk';
}

function replaceImage() {
  console.log('Called replaceImage()');
  let newImage = document.querySelector('#picture');
  newImage.src = "download.jpg";
}

function changeCodeStatus() {
  let nameElement = document.querySelector('#codestatus');
  nameElement.innerHTML = "<img src='https://i.pinimg.com/originals/4d/7e/e3/4d7ee3fc125a8e5423c16cec50a2a6eb.png' />";
}

/*return to this */function addFavoriteThings() {
  console.log('Called addFavoriteThings()');

  let nameElement = document.querySelector('#favthings');
  nameElement.textContent = 'Square-rim glasses';
  nameElement.textContent = 'The Aeneid';
  nameElement.textContent = 'White bread';

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
}

// Get a reference to the button w/ id="show-info-button"
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
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page WHAT DOES THIS EVEN MEAN?
let consoleLogButton = document.querySelector('#________');

// Log something when that button is clicked
/*consoleLogButton.addEventListener('click', function() {
  console.log('Change this text if you want!');
});*/

let makeBlueButton = document.querySelector('#________');
makeBlueButton.addEventListener('click', function() {
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
document.addeventListener('keydown', function() {
  // This is called whenever a user pressed any key.

  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */

// Your code goes here

/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */

// Your code goes here

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
