const buttons = document.querySelectorAll('.filter_btn');
const items = document.querySelectorAll('.lit_piece');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-target');

    items.forEach(item => {
      const categoryString = item.getAttribute('data-category');
      const categories = categoryString.split(' ');

      if (filter === 'all' || categories.includes(filter)) {
        item.style.display = 'grid'; 
      } else {
        item.style.display = 'none';
      }
    });
  });
});