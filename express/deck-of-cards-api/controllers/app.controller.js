const axios = require('axios');
const appServices = require('../services/app.services');

const NEW_DECK_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
const DRAW_CARD_URL = 'https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/';

exports.homePage = (req, res) => {
    res.render('homepage');
}

// exports.getDeck = async (req, res, next) => {
//     let newDeck = await axios.get('https://deckofcardsapi.com/api/deck/new/');
//     let deckId = newDeck.data['deck_id'];
//     console.log (deckId);
//     res.render('/your-card', {deckId});
// }

exports.getCard = async (req, res) => {
    if (!req.session.deckId) {
        let newDeckId = await appServices.newDeck(NEW_DECK_URL);
        req.session.deckId = newDeckId;
    }
    let drawResponse = await appServices.newCard(DRAW_CARD_URL.replace('<<deck_id>>', req.session.deckId));
    let newCardObj = drawResponse.data.cards[0];
    cardValue = newCardObj.value;
    cardSuit = newCardObj.suit;
    let remainingCards = drawResponse.data.remaining;
    console.log(`${cardValue} of ${cardSuit}`);
    res.render('card', { cardValue, cardSuit, remainingCards });
}