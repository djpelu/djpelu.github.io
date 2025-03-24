const textElement = document.getElementById('typewriter');
const texts = ["alta letteratura", "scritti", "cose che ho scri", "boh"];
const typingSpeed = 100; // Velocità di scrittura (in millisecondi)
const erasingSpeed = 50; // Velocità di cancellazione (in millisecondi)
const newTextDelay = 200; // Tempo di attesa prima di iniziare a cancellare (in millisecondi)

let textIndex = 0; // indice dei texts
let charIndex = 0; // indice del carattere del text

function type() {
    if (charIndex < texts[textIndex].length) { // se charIndex < lunghezza text
        textElement.textContent += texts[textIndex].charAt(charIndex); // aggiungi un carattere al contenuto del TextElement
        charIndex++; // aumenta charIndex di 1
        setTimeout(type, typingSpeed); // rilancia funzione dopo typingSpeed
    } else {
        setTimeout(erase, newTextDelay); // lancia cancellazione dopo newTextDelay
    }
}

function erase() {
    if (charIndex > 0) { // se la parola non è stata cancellata del tutto
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1); // togli l'ultima lettera
        charIndex--; // diminuisci charIndex di 1
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex++; // passa alla parola dopo
        if (textIndex >= texts.length) textIndex = 0; // e se non c'è quella dopo riparti
        setTimeout(type, newTextDelay);
    }
}

document.addEventListener("DOMContentLoaded", function() { // avvia typewriter quando la pagina è caricata
    setTimeout(type, newTextDelay);
});
