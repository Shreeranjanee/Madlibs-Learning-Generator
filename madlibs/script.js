$(document).ready(function () {
  $('#madLibsForm').submit(function (event) {
    event.preventDefault();

    // ... existing code to retrieve input values and generate the story ...

    // Hide all elements within the container except the image and the Mad Libs story
    $('.container-fluid').children().not('img, #madLibsStory').hide();

    // Display the Mad Libs story
    $('#madLibsStory').html(story);
  });
});
