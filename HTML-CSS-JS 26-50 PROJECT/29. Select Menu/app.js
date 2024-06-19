document.addEventListener('DOMContentLoaded', () => {
  const selectField = document.getElementById('selectField');
  const selectText = document.getElementById('selectText');
  const list = document.getElementById('list');
  const arrowIcon = document.getElementById('arrowIcon');
  const options = document.querySelectorAll('.options');
  const goButton = document.getElementById('goButton');
  let selectedUrl = '';

  // Toggle the list visibility
  selectField.addEventListener('click', () => {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
  });

  // Update selectText with the clicked option and hide the list
  options.forEach(option => {
    option.addEventListener('click', () => {
      selectText.innerText = option.querySelector('p').innerText;
      selectedUrl = option.getAttribute('data-url');
      list.classList.add('hide');
      arrowIcon.classList.remove('rotate');
      goButton.classList.remove('hide'); // Show the button when an option is selected
    });
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!selectField.contains(event.target)) {
      list.classList.add('hide');
      arrowIcon.classList.remove('rotate');
    }
  });

  // Navigate to the selected URL when the button is clicked
  goButton.addEventListener('click', () => {
    if (selectedUrl) {
      window.location.href = selectedUrl;
    }
  });
});
