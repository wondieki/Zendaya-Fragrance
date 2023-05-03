// https://my-json-server.typicode.com/wondieki/Zendaya-Fragrance



fetch('https://my-json-server.typicode.com/wondieki/Zendaya-Fragrance/db')

  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

document.addEventListener("DOMContentLoaded", function(){
    const url = "http://'https://my-json-server.typicode.com/wondieki/Zendaya-Fragrance/db':3000/perfumes/"
})

document.addEventListener('DOMContentLoaded', () => {
  const perfumeTitle = document.querySelectorAll('.perfume-title');
  perfumeTitle.forEach((title) => {
    title.addEventListener('click', () => {
      fetch("https://my-json-server.typicode.com/wondieki/Zendaya-Fragrance/perfumes")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      console.log("Title Clicked");
    });
  });
});



const perfumeDescriptions = document.querySelectorAll('.perfume-description');

perfumeDescriptions.forEach((description) => {
  description.addEventListener('mouseover', (event) => {
    console.log("Description mouseover");
  });
});


  function handleLike() {
    let numb = parseInt(document.getElementById("count").innerHTML);
    document.getElementById("count").innerHTML = numb + 1;
    alert(document.getElementById("count").innerHTML );
    
  }