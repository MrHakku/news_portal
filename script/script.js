// Function to load HTML content
function loadHTML(file, elementId) {
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not fetch ${file}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error loading content:', error));
  }
  loadHTML('header.html', 'header');
  loadHTML('main.html', 'main');
  loadHTML('footer.html', 'footer');
  
  // Load header and footer
  window.addEventListener('scroll', function () {
    var a = scrollY
    if (a > 100) {
        document.querySelector('.mid-scroll').classList.remove('d-none')
    }
    else {
        document.querySelector('.mid-scroll').classList.add('d-none')
    }
})