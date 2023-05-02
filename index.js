// //https://my-json-server.typicode.com/wondieki/project



fetch('https://my-json-server.typicode.com/wondieki/project')

  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

document.addEventListener("DOMContentLoaded", function(){
    const url = "http://localhost:3000/perfumes/"
})

const perfumeTitles = document.querySelectorAll('.perfume-title');

perfumeTitles.forEach((title) => {
    title.addEventListener('click', (event) => {
        // handle the click event
    });
});


const perfumeDescription = document.querySelectorAll('.perfume-description');

perfumeDescription.forEach(() => {
    description.addEventListener('mouseover', (event) => {
        // handle the mouseover event
    });
});

  function handleLike() {
    let numb = parseInt(document.getElementById("count").innerHTML);
    document.getElementById("count").innerHTML = numb + 1;
    alert(document.getElementById("count").innerHTML );
    
  }

