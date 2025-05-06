document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.toggle-btn');
  const toc = document.querySelector('.toc');
  
  toggleBtn.addEventListener('click', function() {
    toc.classList.toggle('active');
    
    if (toc.classList.contains('active')) {
      toggleBtn.textContent = "Hide Chapters";
    } else {
      toggleBtn.textContent = "Explore Chapters";
    }
  });
  window.addEventListener('mousemove', function(e) {
    const crystalLayer = document.querySelector('.crystal-layer');
    const caveLayer = document.querySelector('.cave-layer');
    
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    
    crystalLayer.style.transform = `translateX(${x * -20}px) translateY(${y * -10}px)`;
    caveLayer.style.transform = `translateX(${x * -10}px)`;
  });
});