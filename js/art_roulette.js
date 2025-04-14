const opere = [
    {
        src: 'images/roulette_gallery/autorit.png',
        srcset: 'images/roulette_gallery/autorit.webp',
        title: "Lo stile non va a pile ma lo style va a pile",
    },
    {
        src: 'images/roulette_gallery/bacio.png',
        srcset: 'images/roulette_gallery/bacio.webp',
        title: "Primo bacio in discoteca",
    },
    {
        src: 'images/roulette_gallery/bici.png',
        srcset: 'images/roulette_gallery/bici.webp',
        title: "Nel vuoto che mi resta",
        description: "Ritratto equestre della mia bici rubata incorniciato nel copertone superstite",
    },
    {
        src: 'images/roulette_gallery/butts.png',
        srcset: 'images/roulette_gallery/butts.webp',
        title: "I like big butts and i cannot lie",
    },
    {
        src: 'images/roulette_gallery/naso.png',
        srcset: 'images/roulette_gallery/naso.webp',
        title: "Chi va piano si infila in un anagramma",
    },
    {
        src: 'images/roulette_gallery/panda.png',
        srcset: 'images/roulette_gallery/panda.webp',
        title: "La consapevolezza che la realtà è inesorabilmente destinata a finire nel nulla e due panda",
    },
    {
        src: 'images/roulette_gallery/pluc.png',
        srcset: 'images/roulette_gallery/pluc.webp',
        title: "Pluc"
    },
    {
        src: 'images/roulette_gallery/tartarughe.png',
        srcset: 'images/roulette_gallery/tartarughe.webp',
        title: "Sotto il guscio niente"
    },
    {
        src: 'images/roulette_gallery/vitello.png',
        srcset: 'images/roulette_gallery/vitello.webp',
        title: "Quadro che non ti aspettavi di trovare nello chalet sulle Alpi del tuo capo che chissà, forse si è finalmente deciso a lasciare sua moglie",
    },
    {
        src: 'images/lit_gallery/accaressami.png',
        srcset: 'images/lit_gallery/accaressami.webp',
        url: 'https://www.wattpad.com/story/351065216-accaressami-l%27anima-albergomi-il-cuore',
        title: "Accaressami l'anima, Albergomi il cuore",
        description: "Parodia di fanfiction in cui Caressa e Bergomi sono amanti segreti"
    },
    {
        src: 'images/lit_gallery/cassandra.png',
        srcset: 'images/lit_gallery/cassandra.webp',
        url: 'https://www.instagram.com/p/CBDUtI7jCFc/',
        title: "Cara Cassandra",
        description: "Racconto pubblicato da “La Brutta Rivista”"
    },
    {
        src: 'images/lit_gallery/chiara.png',
        srcset: 'images/lit_gallery/chiara.webp',
        url: 'https://www.bibliotecadigitale.unipv.eu/entities/multipurpose/ad74892b-da6d-4c58-975f-7e9c371aa3d6',
        title: "Chiara giocava col sangue",
        description: "Racconto letto al concorso artistico “Puntiamo i tacchi”"
    },
    {
        src: 'images/lit_gallery/ctrl.png',
        srcset: 'images/lit_gallery/ctrl.webp',
        url: 'lit_ctrl.html',
        title: "Ctrl+i",
        description: "Racconto premiato al concorso letterario “L’écrivain de la Tour”"
    },
    {
        src: 'images/lit_gallery/knife.png',
        srcset: 'images/lit_gallery/knife.webp',
        url: 'https://www.youtube.com/watch?v=zmDYbdEpfk4&t=168s',
        title: "Knife Life",
        description: "Short film sviluppato in collaborazione con Giulia Timis"
    },
    {
        src: 'images/lit_gallery/manic.png',
        srcset: 'images/lit_gallery/manic.webp',
        url: 'https://www.youtube.com/watch?v=wvbalbbxL9M',
        title: "Manic Pixel Killer Girl",
        description: "Short film sviluppato in collaborazione con Giulia Timis"
    },
    {
        src: 'images/lit_gallery/nero.png',
        srcset: 'images/lit_gallery/nero.webp',
        url: 'https://www.energheia.org/i-brevissimi-2022-nero-argentato-alessandra-peluzzi_milano.html',
        title: "Nero Argentato",
        description: "Racconto finalista al premio letterario internazionale “Energheia”"
    },
    {
        src: 'images/lit_gallery/niccolo.png',
        srcset: 'images/lit_gallery/niccolo.webp',
        url: 'https://www.instagram.com/p/CMuEo1FHhmp/',
        title: "Niccolò",
        description: "Racconto pubblicato da @stor.i.elle"
    },
    {
        src: 'images/lit_gallery/nigella.png',
        srcset: 'images/lit_gallery/nigella.webp',
        url: 'https://www.wattpad.com/story/269319079-nigella-bites-me',
        title: "Nigella Bites... me",
        description: "Parodia di fanfiction con i topoi caratteristici del genere, un po' di umorismo e un po' di porcherie"
    },
    {
        src: 'images/lit_gallery/salamini.png',
        srcset: 'images/lit_gallery/salamini.webp',
        url: 'https://www.wattpad.com/story/323491448-ma-sei-un-salamino',
        title: "Ma... sei un salamino",
        description: "Parodia di Twilight in cui Bella si innamora di un Salamino Beretta piccante"
    },
    {
        src: 'images/lit_gallery/schiantal.png',
        srcset: 'images/lit_gallery/schiantal.webp',
        url: 'https://www.instagram.com/p/CN2DaGkHoLQ/',
        title: "Schiantal",
        description: "Racconto pubblicato da @stor.i.elle"
    },
    {
        src: 'images/lit_gallery/scoglio.png',
        srcset: 'images/lit_gallery/scoglio.webp',
        url: 'lit_scoglio.html',
        title: "La pasta allo scoglio",
        description: "Manifesto che nel 2015 mi ha fatto finire sul Corriere della Sera"
    },
    {
        src: 'images/lit_gallery/sedie.png',
        srcset: 'images/lit_gallery/sedie.webp',
        url: 'lit_sedie.html',
        title: "Chairs, a guide",
        description: "Fanzine sviluppata in collaborazione con Alessia Campanella"
    },
    {
        src: 'images/roulette_gallery/NTC_cover.png',
        srcset: 'images/roulette_gallery/NTC_cover.webp',
        url: 'https://www.youtube.com/watch?v=6kVqHZlbvEQ',
        title: "Signorina del Nike Training",
        description: "La mia canzone più di successo"
    },
    {
        src: 'images/tre_quadro.png',
        srcset: 'images/tre_quadro.webp',
        url: 'TRE.html',
        title: "TRE!",
        description: "Parodia di “Una serie di sfortunati eventi” che vorrei trasformare in fumetto"
    },
    {
        src: 'images/crawling_snake_mobile.png',
        srcset: 'images/crawling_snake_mobile.webp',
        url: 'crawling.html',
        title: "Crawling",
        description: "Snake, ma pian piano che il serpente cresce, aumentano anche le sue responsabilità"
    },
];



const popup = document.getElementById('AR_popup');
const popupP = document.getElementById('AR_popup_p');

const popupRandomContent = document.getElementById('AR_popup_random_content');
const popupWebp = document.getElementById('AR_popup_webp');
const popupPic = document.getElementById('AR_popup_pic');
const popupTitle = document.getElementById('AR_popup_title');
const popupDescr = document.getElementById('AR_popup_description');
const popupLink = document.getElementById('AR_popup_link');
const popupVai = document.getElementById('AR_popup_vai');
const overlay = document.querySelector('.overlay_popup');

function Roulette() {

    // seleziona opera casuale
    const randomIndex = Math.floor(Math.random() * opere.length);
    const selected = opere[randomIndex];

    // mostra popup
    popup.classList.add('mostra');
    popupP.style.margin = "1em"; // margine modificato per centrare meglio la scritta
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // blocca lo scroll

    // puntini progressivi
    setTimeout(() => popupP.textContent += ".", 500);
    setTimeout(() => popupP.textContent += ".", 1000);
    setTimeout(() => popupP.textContent += ".", 1500);
    
    // dopo due secondi 'rempiamo' immagine, titolo, eventuale descrizione ed eventuale bottone
    setTimeout(() => {

        popupP.style.margin = "0" // resettiamo margine

        popupWebp.srcset = selected.srcset;
        popupPic.src = selected.src;
        popupTitle.textContent = selected.title;

        if (selected.description) {
            popupDescr.textContent = selected.description;
            popupDescr.style.display = 'block';
        } else {
            popupDescr.style.display = 'none';
        }    

        if (selected.url) {
            popupVai.classList.add('mostra')
            popupLink.href = selected.url;
        } else {
            popupVai.classList.remove('mostra')
            popupLink.removeAttribute('href');
        }

        popupRandomContent.classList.add("mostra") // e li mostriamo

    }, 2000);
}

document.getElementById('AR_btn').addEventListener('click', Roulette)

document.getElementById('AR_popup_close').addEventListener('click', () => {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // riabilita lo scroll
    popup.classList.remove('mostra');
    popupRandomContent.classList.remove('mostra');
    popupP.textContent = "La tua opera a caso è"
});



