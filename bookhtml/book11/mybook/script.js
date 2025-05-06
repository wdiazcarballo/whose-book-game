document.addEventListener('DOMContentLoaded', function () {
  const toc = document.querySelector('.toc');
  const button = document.getElementById('tocButton');

  toc.style.display = 'none';

  button.addEventListener('click', () => {
    toc.style.display = toc.style.display === 'none' ? 'block' : 'none';
  });
});