// event bubbling

// child => parent => grandParent => ....ancestors 
// internet explorer 4

// Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.


const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})

button.addEventListener('click', () => {
  console.log("button was clicked")
})

// span was clicked 
// div was clicked 
// body was clicked

// event capturing
// netscape communicate
// just opposite of event bubbling

// ancestors => grandParent => parent => child 

// Event capturing occurs when a nested element gets clicked. The click event of its parent elements must be triggered before the click of the nested element. This phase trickles down from the top of the DOM tree to the target element.


