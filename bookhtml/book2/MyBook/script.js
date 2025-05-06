// Initialize TOC state when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Hide TOC initially
  const toc = document.querySelector('.toc');
  toc.style.display = 'none';
});

function toggleTOC() {
  const toc = document.querySelector('.toc');
  toc.style.display = (toc.style.display === 'none') ? 'block' : 'none';
}