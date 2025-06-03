// scartoccia
document.getElementById('btn_carta').addEventListener('click', function () {
  const contenuto = document.getElementById('xTe_main');
  const bottone = document.getElementById('btn_carta');

  contenuto.classList.remove('nascosto');
  bottone.classList.add('nascosto');
});

// accartoccia
document.getElementById('xTe_main').addEventListener('click', function () {
  const contenuto = document.getElementById('xTe_main');
  const bottone = document.getElementById('btn_carta');

  contenuto.classList.add('nascosto');
  bottone.classList.remove('nascosto');
});