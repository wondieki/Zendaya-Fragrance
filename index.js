// // //const express = require('express');
// // const app = express();

// // app.get('/perfume', (req, res) => {
// //   res.send('This is the films page!');
// // });

// // app.listen(3000, () => {
// //   console.log('Server running on http://localhost:3000');
// // });
// // //

// // Your code here

// //Global Variables used in different functions
// let availablePerfumes= 0;
 
// //Retrieve the first movie only
// function retrievePerfume(){             

//     fetch(" http://localhost:3000/perfumes/1")
//     .then(resp => resp.json())
//     .then(data => displayPerfume(data))
// }

// //retrieving All movies in a list
// function retrievePerfumeList(){

//     fetch(" http://localhost:3000/perfumes")
//     .then(resp => resp.json())
//     .then(data => displayList(data))
// }

// //Passes text and image link to elements

// function displayPerfume(perfume){     
//     document.querySelector("#poster").src=perfume.poster;
//     //document.querySelector("#poster").src=perfume.nodes;
//     document.querySelector("#title").innerText=perfume.title;
//     document.querySelector("#fperfume-info").innerText=perfume.description;
   
// }

// //Dispays list of perfumes with event listeners
// function displayList(perfumeList){        
//     document.querySelector("#perfumes li").remove();

//     perfumeList.forEach((perfume)=>{
//         let newList=document.createElement("li");
//         newList.innerText=perfume.title;
//         newList.className="perfume item";


// //This event listener allows us to display and call different perfumes.
//          newList.addEventListener('click',()=>{         
//             console.log("click");
//             selected=newList.innerText;
//             displayPerfume(perfume);
//         })
//         document.querySelector("#perfumes").appendChild(newList);

//     })
    
// }

// retrieveFirstPerfume();
// retrievePerfumeList();


//https://my-json-server.typicode.com/wondieki/project
// Select all the card headers
//const cardHeaders = document.querySelectorAll('.card1 h5, .card2 h5, .card3 h5, .card4 h5');

// Loop through each header and add a click event listener
// cardHeaders.forEach(header => {
//   header.addEventListener('click', async () => {
//     // Get the fragrance name from the header
//     const fragranceName = header.textContent;

//     try {
//       // Make an API request to get the fragrance description
//       const response = await fetch('https://my-json-server.typicode.com/wondieki/project/fragrances');
//       const data = await response.json();

//       // Find the fragrance with the matching name
//       const fragrance = data.find(f => f.name === fragranceName);

//       // Update the p tag with the fragrance description
//       header.nextElementSibling.textContent = fragrance.description;
//     } catch (error) {
//       console.log(error);
//     }
//   });
// });

// const cards = document.querySelectorAll('.card1, .card2, .card3, .card4');

// // Loop through each card
// cards.forEach(card => {
//   // Get the perfume name from the h5 element
// const perfumeName = card.querySelector('h5').textContent;
// console.log("perfumeName")

//   // Fetch the perfume data from the API
//   fetch('https://my-json-server.typicode.com/wondieki/project')
//     .then(response => response.json())
//     .then(data => {
//       // Find the perfume object that matches the perfume name
//       const perfume = data.find(item => item.name === perfumeName);
//       console.log("perfume")

//       // Get the perfume description and add it to the p element
//       const perfumeDescription = perfume.description;
//       console.log("perfumeDescription")
//       card.querySelector('p').textContent = perfumeDescription;
//     })
//     .catch(error => console.error(error));
// });

// const cards = document.querySelectorAll('.card1, .card2, .card3, .card4');

// // Loop through each card
// cards.forEach(card => {
//   // Get the perfume name from the h5 element
//   const perfumeName = card.querySelector('h5').textContent;

//   // Fetch the perfume data from the API
//   fetch('https://my-json-server.typicode.com/wondieki/project')
//     .then(response => response.json())
//     .then(data => {
//       // Find the perfume object that matches the perfume name
//       const perfume = data.find(perfumeName);

//       // Get the perfume description and add it to the p element
//       const perfumeDescription = perfume.description;
//       card.querySelector('p').textContent = perfumeDescription;

//       // Add click event listener to the title element
//       const title = card.querySelector('h5');
//       title.addEventListener('click', () => {
//         // Toggle the class that shows or hides the description
//         card.querySelector('p').classList.toggle('show');
//       });
//     })
//     .catch(error => console.error(error));
// });



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