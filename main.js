const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('myModal');
const closeButtons = document.querySelectorAll('.close');

// Open modal on button click
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
  console.log("you clicked on modal nice!"); 
});

// Close modal when clicking on close buttons
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'none';
    console.log("you clicked on x button"); 
  });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
    console.log("You clicked outside");
  }
});

// Make button sticky on scroll (your existing code)
window.addEventListener('scroll', () => {
  // ... your existing scroll event code ...
});

const words = ["a UI UX designer.", "an innovator.", "a problem solver.", "a visual storyteller.", "a user advocate."];
let currentWordIndex = 0;

// Function to update the word in the header
function rotateWords() {
    document.getElementById("wordCarousel").textContent = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length; // Loop through the words
}

// Initial word display
rotateWords();

// Set an interval to change the word every 2 seconds (adjust the timing as needed)
setInterval(rotateWords, 2000);

console.log("Your main.js file is loaded correctly!")