const axios = require('axios');

async function newDeck(deckURL) {
    let newDeck = await axios.get(deckURL);
    let deckId = newDeck.data.deck_id;
    return deckId;
}

async function newCard(drawURL) {
    let card = await axios.get(drawURL);
    return card;
}

module.exports = {
    newDeck,
    newCard
}