//https://my-json-server.typicode.com/wondieki/project

function search() {
  // get input value
  const input = document.getElementById("search-bar").value.toLowerCase();

  // get all elements to search
  const elements = document.querySelectorAll(".searchable");

  // loop through elements and hide/show based on search term
  elements.forEach(function(element) {
    if (element.textContent.toLowerCase().indexOf(input) > -1) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
}

// Get all the card elements
const cardElements = document.querySelectorAll('.displayedImages > div');

// Loop through each card element
cardElements.forEach(card => {
  // Create a new anchor element for the Shop Now button
  const shopNowButton = document.createElement('a');
  shopNowButton.href = '#';
  shopNowButton.id = 'shop-now';
  
  // Create a new font awesome icon element for the shopping cart
  const shoppingCartIcon = document.createElement('i');
  shoppingCartIcon.classList.add('fas', 'fa-shopping-cart');
  
  // Append the shopping cart icon to the anchor element
  shopNowButton.appendChild(shoppingCartIcon);
  
  // Create a new button node for the Shop Now button label
  const shopNowLabel = document.createTextNode(' SHOP NOW');
  
  // Append the label text node to the anchor element
  shopNowButton.appendChild(shopNowLabel);
  
  // Append the Shop Now button to the card element
  card.appendChild(shopNowButton);
});



