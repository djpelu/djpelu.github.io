const opere = [
    {
        src: 'images/roulette_gallery/autorit.png',
        title: "Lo stile non va a pile ma lo style va a pile",
    },
    {
        src: 'images/roulette_gallery/bacio.png',
        title: "Primo bacio in discoteca",
    },
    {
        src: 'images/roulette_gallery/bici.png',
        title: "Nel vuoto che mi resta",
        description: "Ritratto equestre della mia bici rubata incorniciato nel copertone superstite",
    },
    {
        src: 'images/roulette_gallery/butts.png',
        title: "I like big butts and i cannot lie",
    },
    {
        src: 'images/roulette_gallery/fotot.png',
        title: "Siamo tutti protagonisti",
        description: "Fototessera di sconosciuta incorniciata male"
    },
    {
        src: 'images/roulette_gallery/naso.png',
        title: "Chi va piano si infila in un anagramma",
    },
    {
        src: 'images/roulette_gallery/panda.png',
        title: "La consapevolezza che la realtà è inesorabilmente destinata a finire nel nulla e due panda",
    },
    {
        src: 'images/roulette_gallery/pluc.png',
        title: "Pluc"
    },
    {
        src: 'images/roulette_gallery/tartarughe.png',
        title: "Sotto il guscio niente"
    },
    {
        src: 'images/roulette_gallery/vitello.png',
        title: "Quadro che non ti aspettavi di trovare nello chalet sulle Alpi del tuo capo che chissà, forse si è finalmente deciso a lasciare sua moglie",
    },
    {
        src: 'images/lit_gallery/accaressami.png',
        url: 'https://www.wattpad.com/story/351065216-accaressami-l%27anima-albergomi-il-cuore',
        title: "Accaressami l'anima, Albergomi il cuore",
        description: "Parodia di fanfiction in cui Caressa e Bergomi sono amanti segreti"
    },
    {
        src: 'images/lit_gallery/cassandra.png',
        url: 'https://www.instagram.com/p/CBDUtI7jCFc/',
        title: "Cara Cassandra",
        description: "Racconto pubblicato da 'La Brutta Rivista'"
    },
    {
        src: 'images/lit_gallery/chiara.png',
        url: 'https://www.bibliotecadigitale.unipv.eu/entities/multipurpose/ad74892b-da6d-4c58-975f-7e9c371aa3d6',
        title: "Chiara giocava col sangue",
        description: "Racconto letto al concorso artistico 'Puntiamo i tacchi'"
    },
    {
        src: 'images/lit_gallery/ctrl.png',
        url: 'lit_ctrl.html',
        title: "Ctrl+i",
        description: "Racconto premiato al concorso letterario 'L’écrivain de la Tour'"
    },
    {
        src: 'images/lit_gallery/knife.png',
        url: 'https://www.youtube.com/watch?v=zmDYbdEpfk4&t=168s',
        title: "Knife Life",
        description: "Short film sviluppato in collaborazione con Giulia Timis"

    },
    {
        src: 'images/lit_gallery/manic.png',
        url: 'https://www.youtube.com/watch?v=wvbalbbxL9M',
        title: "Manic Pixel Killer Girl",
        description: "Short film sviluppato in collaborazione con Giulia Timis"
    },
    {
        src: 'images/lit_gallery/nero.png',
        url: 'https://www.energheia.org/i-brevissimi-2022-nero-argentato-alessandra-peluzzi_milano.html',
        title: "Nero Argentato",
        description: "Racconto finalista al premio letterario internazionale 'Energheia'"
        
    },
    {
        src: 'images/lit_gallery/niccolo.png',
        url: 'https://www.instagram.com/p/CMuEo1FHhmp/',
        title: "Niccolò",
        description: "Racconto pubblicato da @stor.i.elle"
    },
    {
        src: 'images/lit_gallery/nigella.png',
        url: 'https://www.wattpad.com/story/269319079-nigella-bites-me',
        title: "Nigella Bites... me",
        description: "Parodia di fanfiction con i topoi caratteristici del genere, un po' di umorismo e un po' di porcherie"
    },
    {
        src: 'images/lit_gallery/salamini.png',
        url: 'https://www.wattpad.com/story/323491448-ma-sei-un-salamino',
        title: "Ma... sei un salamino",
        description: "Parodia di Twilight in cui Bella si innamora di un Salamino Beretta piccante"
    },
    {
        src: 'images/lit_gallery/schiantal.png',
        url: 'https://www.instagram.com/p/CN2DaGkHoLQ/',
        title: "Schiantal",
        description: "Racconto pubblicato da @stor.i.elle"
    },
    {
        src: 'images/lit_gallery/scoglio.png',
        url: 'lit_scoglio.html',
        title: "La pasta allo scoglio",
        description: "Manifesto che nel 2015 mi ha fatto finire sul Corriere della Sera"
    },
    {
        src: 'images/lit_gallery/sedie.png',
        url: 'lit_sedie.html',
        title: "Chairs, a guide",
        description: "Fanzine sviluppata in collaborazione con Alessia Campanella"
    },
    {
        src: 'images/roulette_gallery/0_NTC_cover.png',
        url: 'https://www.youtube.com/watch?v=6kVqHZlbvEQ',
        title: "Signorina del Nike Training",
        description: "La mia canzone più di successo"
    },
    {
        src: 'images/tre_quadro.png',
        url: 'TRE.html',
        title: "TRE!",
        description: "Parodia di 'Una serie di sfortunati eventi' che vorrei trasformare in fumetto"
    },
    {
        src: 'images/crawling_snake_mobile.png',
        url: 'crawling.html',
        title: "Crawling",
        description: "Snake, ma man mano che il serpente cresce aumentano anche le sue responsabilità"
    },       
];


const popup = document.getElementById('AR_popup');
const popupPic = document.getElementById('AR_popup_pic');
const popupLink = document.getElementById('AR_popup_link');
const popupTitle = document.getElementById('AR_popup_title');
const popupDescr = document.getElementById('AR_popup_description');
const popupVai = document.getElementById('AR_popup_vai');

function Roulette() {

    // seleziona opera casuale
    const randomIndex = Math.floor(Math.random() * opere.length);
    const selected = opere[randomIndex];

    popupPic.src = selected.src;
    popupTitle.textContent = selected.title;

    if (selected.description) {  // Corretto: controlla selected.description
        popupDescr.textContent = selected.description;
        popupDescr.style.display = 'block';
    } else {
        popupDescr.style.display = 'none';
    }    


    if (selected.url) {
        popupVai.classList.add('mostra')
        popupLink.href = selected.url;
        popupLink.style.pointerEvents = 'auto';
        popupLink.style.cursor = 'pointer';
    } else {
        popupVai.classList.remove('mostra')
        popupLink.removeAttribute('href');
        popupLink.style.pointerEvents = 'none';
        popupLink.style.cursor = 'default';
    }

    popup.classList.add('mostra');
}

document.getElementById('AR_btn').addEventListener('click', Roulette)

document.getElementById('AR_popup_close').addEventListener('click', () => {
    popup.classList.remove('mostra');
});



