const wetterText = document.getElementById('wetterText');
const wetterSlider = document.getElementById('wetterSlider');
const body = document.body;

wetterSlider.addEventListener('input', function () {
    const wert = wetterSlider.value;
    let bodyKlasse = '';

    if (wert > 75) {
        wetterText.textContent = 'Aktuelle Wetterlage: sonnig';
        bodyKlasse = 'sunny';
    } else if (wert > 50) {
        wetterText.textContent = 'Aktuelle Wetterlage: bewölkt';
        bodyKlasse = 'cloudy';
    } else if (wert > 25) {
        wetterText.textContent = 'Aktuelle Wetterlage: regnerisch';
        bodyKlasse = 'rainy';
    } else {
        wetterText.textContent = 'Aktuelle Wetterlage: stürmisch';
        bodyKlasse = 'stormy';
    }

    body.className = bodyKlasse;
});

function zeigeJahreszeit(jahreszeit) {
    const jahreszeitText = document.getElementById('jahreszeitText');
    jahreszeitText.textContent = 'Aktuelle Jahreszeit: ' + jahreszeit;
}
