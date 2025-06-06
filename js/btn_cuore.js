
// precarica mmagine hover
const imgHover = new Image();
imgHover.src = "images/btn_cuore_hover.png";

//gestisce hover btn cuore perchè la soluzione con css non è supportata da tutti browser
document.querySelectorAll('.btn_cuore').forEach(button => {
  const img = button.querySelector('.btn_cuore_img');

  button.addEventListener("mouseover", () => {
    img.src = "images/btn_cuore_hover.png";
  });

  button.addEventListener("mouseout", () => {
    img.src = "images/btn_cuore.png";
  });
});
