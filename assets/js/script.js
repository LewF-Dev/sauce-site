// assets/js/script.js

// Example: Change navbar background on scroll
document.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (window.scrollY > 50) {
      header.classList.add('bg-secondary');
    } else {
      header.classList.remove('bg-secondary');
    }
  });
  