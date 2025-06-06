
//gestisce hover btn cuore perchè con css non è supportato dai browser

document.querySelectorAll('.btn_cuore').forEach(button => {
  const img = button.querySelector('.btn_cuore_img');

  button.addEventListener("mouseover", () => {
    img.src = "images/btn_cuore_hover.png";
  });

  button.addEventListener("mouseout", () => {
    img.src = "images/btn_cuore.png";
  });
});
