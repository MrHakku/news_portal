// Function to load HTML content
function loadHTML(file, elementId) {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not fetch ${file}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;


        var splide = new Splide( '.splide' ,{
          perPage:4,
          type:"loop",
          perMove:1,
        });
        splide.mount();
        console.log(splide)
  
    //   //Splide
    //   const splide = new Splide(".splide", {
    //     type: "loop",
    //     perPage: 4,
    //     perMove: 1,
    //   });

    //  console.log(splide)
    })
    .catch((error) => console.error("Error loading content:", error));
}
loadHTML("header.html", "header");
loadHTML("main.html", "main");
// loadHTML('travel.html', 'travel');
loadHTML("footer.html", "footer");



// Load header and footer
window.addEventListener("scroll", function () {
  var a = scrollY;
  if (a > 100) {
    document.querySelector(".mid-scroll").classList.remove("d-none");
  } else {
    document.querySelector(".mid-scroll").classList.add("d-none");
  }
});

//Active
function active() {
  document.querySelector(".dropdown").classList.toggle("active");
}

function slide() {
  document.querySelector("body").classList.toggle("slide");
}
