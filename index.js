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





// Get the button element
const btnShopNow = document.querySelector('.btn-shop-now');

// Define the screen size threshold
const screenSizeThreshold = 768; // Example: 768 pixels

// Add a class to the button element when the screen size is below the threshold
function handleResponsiveShopNowButton() {
  if (window.innerWidth < screenSizeThreshold) {
    btnShopNow.classList.add('btn-shop-now--responsive');
  } else {
    btnShopNow.classList.remove('btn-shop-now--responsive');
  }
}

// Call the function on page load and on window resize
window.addEventListener('load', handleResponsiveShopNowButton);
window.addEventListener('resize', handleResponsiveShopNowButton);


// function handleLike() {
//   let numb = parseInt(document.getElementById("count").innerHTML);
//   parseIntdocument.getElementById("count").innerHTML = numb + 1;

  function handleLike() {
    let numb = parseInt(document.getElementById("count").innerHTML);
    document.getElementById("count").innerHTML = numb + 1;
    alert(document.getElementById("count").innerHTML );
    
  }
  
  // const likeBtn = event.target;
  // const likeCount = likeBtn.nextElementSibling;
  // const currentCount = parseInt(likeCount.textContent);
  // likeCount.textContent = currentCount + 1;


// const cards = document.querySelectorAll('.card1, .card2, .card3, .card4');
// cards.forEach((card) => {
//   const img = card.querySelector('img');
//   const likeBtn = document.createElement('a');
//   likeBtn.textContent = 'Like';
//   likeBtn.classList.add('like-btn');
//   likeBtn.addEventListener('click', handleLikeClick);
//   const likeCount = document.createElement('span');
//   likeCount.textContent = '0';
//   img.after(likeBtn, likeCount);
// });