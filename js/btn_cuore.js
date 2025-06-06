
//gestione hover btn cuore perchè la soluzione con css non è supportata da tutti browser

// precarica mmagine hover (altrimenti quando l'utente clicca, non è ancora caricata e scatta il macello)
const imgHover = new Image();
imgHover.src = "images/btn_cuore_hover.png";

// gestisci hover
document.querySelectorAll('.btn_cuore').forEach(button => {
  const img = button.querySelector('.btn_cuore_img');

  button.addEventListener("mouseover", () => {
    img.src = "images/btn_cuore_hover.png";
  });

  button.addEventListener("mouseout", () => {
    img.src = "images/btn_cuore.png";
  });
});

// evita che quando un utente torna alla home, il bottone sia ancora in hover
window.addEventListener('pageshow', () => {
  document.querySelectorAll('.btn_cuore').forEach(button => {
    const img = button.querySelector('.btn_cuore_img');
    img.src = "images/btn_cuore.png";
  });
});
