// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form inputs
  const formData = new FormData(event.target);
  const values = Object.fromEntries(formData.entries());

  // Generate the Mad Libs story
  const story = generateMadLibsStory(values);

  // Hide all elements
  document.getElementById('madLibsForm').style.display = 'none';
  document.getElementById('madLibsOutput').style.display = 'none';
  document.getElementsByTagName('h3')[0].style.display = 'none';
  document.getElementsByTagName('h3')[1].style.display = 'none';
  document.getElementById('list').style.display = 'none';

  // Display the story on the page
  document.getElementById('storyOutput').textContent = story;
  document.getElementById('madLibsOutput').style.display = 'block';

  // Print the table input values
  printTableInputValues(values);
}
