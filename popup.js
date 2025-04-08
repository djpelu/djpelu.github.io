const trigger = document.querySelector('.popup_trigger');
const overlay = document.querySelector('.overlay_popup');
const popup = document.querySelector('#crawling_popup');
const closeBtn = document.querySelector('.x')

// apri popup se si clicca trigger
trigger.addEventListener('click', (e) => {
  e.stopPropagation(); // evita che il click si propaghi al documento
  overlay.style.display = 'block';
  popup.style.display = 'block';
  document.body.style.overflow = 'hidden'; // blocca lo scroll
});

// chiudi il popup se clicca x
closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.style.display = 'none';
  popup.style.display = 'none';
  document.body.style.overflow = 'auto'; // riabilita lo scroll
});

// Chiudi il popup se si clicca fuori da esso
document.addEventListener('click', () => {
  overlay.style.display = 'none';
  popup.style.display = 'none';
  document.body.style.overflow = 'auto'; // riabilita lo scroll
});

// previeni la chiusura quando si clicca dentro il popup
popup.addEventListener('click', (e) => {
  e.stopPropagation();
});

