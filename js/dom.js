// Lesson 1 Objects

// Create a JS Object
var object = {
  name: 'Testy',
  address: {
    state: 'Oregon'
  }
};
// Access Object Data
var myname = object.name;
console.log(myname);
// Change Object Data
object.address.state = 'Oklahoma'
// Log the Document Object


// Lesson 2 DOM Functions

// Create a paragraph tag
var paragraph = document.createElement('P');
// Add text to a paragraph
paragraph.textContent = 'The DOM is the bomb!';
// Add text to body
document.body.appendChild(paragraph);


// Lesson 3 Event Listeners

// Create DIV Element
var div = document.createElement('DIV');
// Set height of Element
div.style.height = '100vh';
// Append Element to DOM
document.body.appendChild(div);
// Add Event Listener to Element
div.addEventListener('mousemove', function(event) {
  console.log(event);
  var x = event.clientX;
  var y = event.clientY;
  div.textContent = x + ', ' + y;
  div.style.backgroundColor = 'rgb(' + x + ', ' + y +', 100)';
});



// Refactoring
function fullscreen(element) {
  var newElement = document.createElement(element);
  newElement.style.height = '100vh';
  document.body.appendChild(newElement);
  return newElement;
}
// Lesson 3 Event Listeners

// Create DIV Element

// Add Event Listener to Element
div.addEventListener('mousemove', function(event) {
  console.log(event);
  var x = event.clientX;
  var y = event.clientY;
  div.textContent = x + ', ' + y;
  div.style.backgroundColor = 'rgb(' + x + ', ' + y +', 100)';
});

/*
  TODO: leftOff 16:45Javascript and the DOM DevTips
  https://www.youtube.com/watch?v=hM9h1wN4rfU
*/
