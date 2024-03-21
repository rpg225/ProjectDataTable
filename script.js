async function loadCards() {
    try {
        const response = await('http://127.0.0.1:5500/cards.json');
        let cardsJson = await response.json();
        let cardTable = document.getElementById("myCards");
        let onlyRares = document.getElementById("raresOnly");
        let inEuro = document.getElementById("currency");
        const EURO_CONVERSION = 0.87;
        let priceMultiplier;

        
    } catch(err) {
        alert(err);
    }
}