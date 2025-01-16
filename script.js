// rilevo dispositivo utente
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// mostra pop-up SE su mobile e l'utente NON ha già visto il popup
if (isMobileDevice() && !sessionStorage.getItem('popupShown')) {
    setTimeout(function() {
        document.getElementById('allarme').style.display = 'inherit';
        // una volta che l'utente ha visto il popup salvo questa informazione
        sessionStorage.setItem('popupShown', 'true');
    }, 1000); // 1000 millisecondi = 1 second0 per far apparire popup
}

// chiudi popup quando si clicca X
document.querySelector('#allarme_x').addEventListener('click', function() {
    document.getElementById('allarme').style.display = 'none';
});
