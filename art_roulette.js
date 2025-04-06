const opere = [
    {
        src: 'images/roulette_gallery/autorit.png',
    },
    {
        src: 'images/roulette_gallery/bacio.png',
    },
    {
        src: 'images/roulette_gallery/bici.png',
    },
    {
        src: 'images/roulette_gallery/butts.png',
    },
    {
        src: 'images/roulette_gallery/fotot.png',
    },
    {
        src: 'images/roulette_gallery/naso.png',
    },
    {
        src: 'images/roulette_gallery/panda.png',
    },
    {
        src: 'images/roulette_gallery/pluc.png',
    },
    {
        src: 'images/roulette_gallery/tartarughe.png',
    },
    {
        src: 'images/roulette_gallery/vitello.png',
    },
    {
        src: 'images/lit_gallery/accaressami.png',
        url: 'https://www.wattpad.com/story/351065216-accaressami-l%27anima-albergomi-il-cuore'
    },
    {
        src: 'images/lit_gallery/cassandra.png',
        url: 'https://www.instagram.com/p/CBDUtI7jCFc/'
    },
    {
        src: 'images/lit_gallery/chiara.png',
        url: 'https://www.bibliotecadigitale.unipv.eu/entities/multipurpose/ad74892b-da6d-4c58-975f-7e9c371aa3d6'
    },
    {
        src: 'images/lit_gallery/ctrl.png',
        url: 'lit_ctrl.html'
    },
    {
        src: 'images/lit_gallery/knife.png',
        url: 'https://www.youtube.com/watch?v=zmDYbdEpfk4&t=168s'

    },
    {
        src: 'images/lit_gallery/manic.png',
        url: 'https://www.youtube.com/watch?v=wvbalbbxL9M'
    },
    {
        src: 'images/lit_gallery/nero.png',
        url: 'https://www.energheia.org/i-brevissimi-2022-nero-argentato-alessandra-peluzzi_milano.html'
    },
    {
        src: 'images/lit_gallery/niccolo.png',
        url: 'https://www.instagram.com/p/CMuEo1FHhmp/'
    },
    {
        src: 'images/lit_gallery/nigella.png',
        url: 'https://www.wattpad.com/story/269319079-nigella-bites-me'
    },
    {
        src: 'images/lit_gallery/salamini.png',
        url: 'https://www.wattpad.com/story/323491448-ma-sei-un-salamino'
    },
    {
        src: 'images/lit_gallery/schiantal.png',
        url: 'https://www.instagram.com/p/CN2DaGkHoLQ/'

    },
    {
        src: 'images/lit_gallery/scoglio.png',
        url: 'lit_scoglio.html'
    },
    {
        src: 'images/lit_gallery/sedie.png',
        url: 'lit_sedie.html'
    },
    {
        src: 'images/roulette_gallery/0_NTC_cover.png',
        url: 'https://www.youtube.com/watch?v=6kVqHZlbvEQ'
    },    
];


const popup = document.getElementById('AR_popup');
const randomArt = document.getElementById('AR_popup_pic');
const popupLink = document.getElementById('AR_popup_link');

function Roulette() {

    // seleziona opera casuale
    const randomIndex = Math.floor(Math.random() * opere.length);
    const selected = opere[randomIndex];

    randomArt.src = selected.src;

    if (selected.url) {
        popupLink.href = selected.url;
        popupLink.style.pointerEvents = 'auto';
        popupLink.style.cursor = 'pointer';
    } else {
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

document.getElementById('AR_popup_ancora').addEventListener('click', () => {
    popup.classList.remove('mostra');
    Roulette();
});


