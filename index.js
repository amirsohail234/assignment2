function addNumber(num) {
    return function(x) {
      return x + num;
    }
  }
  const addFive = addNumber(5);
  document.write(addFive(10));
  
  document.write(addFive(20)); 
//   2nd question
function addParagraph(text) {
    // Create a new paragraph element
    const p = document.createElement('p');
    p.textContent = text;
    
    // Find the body element in the document
    const body = document.querySelector('body');
    
    body.appendChild(p);
  }
  
  // Example usage:
  addParagraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  addParagraph('Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
//   3rd question

function addListItem(text) {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = text;
    
    // Find the unordered list in the document
    const ul = document.querySelector('ul');
    
    // Append the new list item to the unordered list
    ul.appendChild(li);
  }
  
  // Example usage:
  addListItem('Item 5');
  addListItem('Item 6');
//   4th question 
function changeBackgroundColor(element, color) {
    // Set the background color of the element using the provided color
    element.style.backgroundColor = color;
  }
  
  // Example usage:
  const myElement = document.querySelector('#myElement');
  changeBackgroundColor(myElement, 'red');
//   5th question 
function saveObjectToLocalStorage(key, object) {
    // Convert the object to a string using JSON.stringify
    const objectString = JSON.stringify(object);
    
    // Save the string to localStorage using the provided key
    localStorage.setItem(key, objectString);
  }
  
  // Example usage:
  let myObject = { name: 'John', age: 30 };
  saveObjectToLocalStorage('myObject', myObject);
// 6th 
function getObjectFromLocalStorage(key) {
    // Retrieve the object string from localStorage using the provided key
    const objectString = localStorage.getItem(key);
    
    // If the object string is null or undefined, return null
    if (!objectString) {
      return null;
    }
    
    // Convert the object string to an object using JSON.parse and return it
    return JSON.parse(objectString);
  }
  
  // Example usage:
   myObject = getObjectFromLocalStorage('myObject');
  console.log(myObject);
//   7th question
function searchArray(array, value) {
    // Base case: if the array is empty, return false
    if (array.length === 0) {
      return false;
    }
    
    // Check if the first element of the array is the desired value
    if (array[0] === value) {
      return true;
    }
    
    // Recursive case: remove the first element of the array and search the rest
    return searchArray(array.slice(1), value);
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  console.log(searchArray(myArray, 3)); // true
  console.log(searchArray(myArray, 6)); // false
  
  
  