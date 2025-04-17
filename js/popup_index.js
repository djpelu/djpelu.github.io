const allarmePopup = document.getElementById('allarme')
const closePopup = document.getElementById('allarme_x')
const overlayPopup = document.querySelector('.overlay_popup')

// rilevo dispositivo utente
function isMobileOrTablet() {
    return /Mobi|Android|Tablet|iPad|iPhone|iPod/i.test(navigator.userAgent);
}

// mostra pop-up SE su mobile e l'utente NON ha già visto il popup
if (isMobileOrTablet() && !sessionStorage.getItem('popupShown')) {
    setTimeout(function() {
        overlayPopup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // blocca lo scroll
        allarmePopup.style.display = 'block';
        // una volta che l'utente ha visto il popup salvo questa informazione
        sessionStorage.setItem('popupShown', 'true');
    }, 2000); // 3000 millisecondi = 3 sec per far apparire popup
}

// chiudi popup quando si clicca X
closePopup.addEventListener('click', function() {
    allarmePopup.style.display = 'none';
    overlayPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// chiudi popup se si clicca fuori da esso = overlay
overlayPopup.addEventListener('click', () => {
    overlayPopup.style.display = 'none';
    allarmePopup.style.display = 'none';
    document.body.style.overflow = 'auto';
});