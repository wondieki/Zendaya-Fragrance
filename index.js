//https://my-json-server.typicode.com/wondieki/project

const cards = document.querySelectorAll('.card1, .card2, .card3, .card4');

// Loop through each card
cards.forEach(card => {
  // Get the perfume name from the h5 element
  const perfumeName = card.querySelector('h5').textContent;

  // Fetch the perfume data from the API
  fetch('https://my-json-server.typicode.com/wondieki/project')
    .then(response => response.json())
    .then(data => {
      // Find the perfume object that matches the perfume name
      const perfume = data.find(item => item.name === perfumeName);

      // Get the perfume description and add it to the p element
      const perfumeDescription = perfume.description;
      card.querySelector('p').textContent = perfumeDescription;

      // Add click event listener to the title element
      const title = card.querySelector('h5');
      title.addEventListener('click', () => {
        // Toggle the class that shows or hides the description
        card.querySelector('p').classList.toggle('show');
      });
    })
    .catch(error => console.error(error));
});