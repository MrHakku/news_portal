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
  loadHTML('footer.html', 'footer');
  // Load header and foote