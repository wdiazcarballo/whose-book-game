function toggleTOC() {
    const toc = document.querySelector('#toc-content');
    const button = document.querySelector('.toggle-btn');
    
    if (toc.style.display === 'none') {
        toc.style.display = 'block';
        toc.style.opacity = '0';
        setTimeout(() => {
            toc.style.opacity = '1';
        }, 10);
        button.textContent = 'ซ่อน สารบัญ';
    } else {
        toc.style.opacity = '0';
        setTimeout(() => {
            toc.style.display = 'none';
        }, 300);
        button.textContent = 'แสดง สารบัญ';
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    const toc = document.querySelector('#toc-content');
    toc.style.display = 'none';
    toc.style.transition = 'opacity 0.3s ease';
}); 