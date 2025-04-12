const prevBtn = document.querySelector('#prev_btn');
const nextBtn = document.querySelector('#next_btn');
const book = document.querySelector('#book');
const overlay = document.querySelector('#sedie_overlay')

prevBtn.addEventListener('click', goPrevPage);
nextBtn.addEventListener('click', goNextPage);

let currentLocation = 1;
let numOfPapers = 14;
let lastPaper = numOfPapers + 1

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.classList.add("flip_btn_sx_open");
    nextBtn.classList.add("flip_btn_dx_open");
    overlay.classList.add("overlay_popup")
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)"
    } else {
        book.style.transform = "translateX(100%)" 
    }
    prevBtn.classList.remove("flip_btn_sx_open");
    nextBtn.classList.remove("flip_btn_dx_open");
    overlay.classList.remove("overlay_popup")
}

function goNextPage() {
    if(currentLocation < lastPaper) { // se non siamo a fine libro

        if (currentLocation === 1) { // se siamo a inizio libro
         openBook() // semplicemente ricentra tutto e spostia i tasti, ma l'apertura vera e propria avviene con flipped
        }

        const currentPaper = document.querySelector(`#p${currentLocation}`); // se siamo a p1
        const nextPaper = document.querySelector(`#p${currentLocation + 1}`); // next paper è p2

        currentPaper.classList.add("flipped"); // aggiunge la class 'flipped' a p1

        setTimeout(() => { // da a p2 z index 2
            if (nextPaper) {
                nextPaper.style.zIndex = currentLocation + 1;
            }
        }, 90);

        currentLocation++; // aggiorna current location -> 2

        if (currentLocation === lastPaper) { // se abbiamo raggiunto la fine del libro
            closeBook(false); // chiude il libro
        }
    }
}

function goPrevPage() {
    if (currentLocation > 1) {

        if (currentLocation === lastPaper) {
            openBook();
        }

        currentLocation--; // scala subito per evitare di accedere a p15 che non esiste

        const currentPaper = document.querySelector(`#p${currentLocation + 1}`);
        const prevPaper = document.querySelector(`#p${currentLocation}`);

        if (prevPaper) prevPaper.classList.remove("flipped");

        setTimeout(() => { // da a p2 z index 2
            if (currentPaper) {
                currentPaper.style.zIndex = 0;
            }
        }, 130);

        if (currentLocation === 1) {
            closeBook(true);
        }
    }
}
