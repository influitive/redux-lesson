const GET_DECK = 'GET_DECK';
import axios from 'axios';

// use this to populate your cards
const initialData = (dispatch) => {
  axios.get(`http://deckofcardsapi.com/api/deck/flyba761egrc/shuffle/`)
    .then(() => {
      return axios.get(`http://deckofcardsapi.com/api/deck/flyba761egrc/draw/?count=52`)
   }).then((response) => {
      if(response.status == 200){
        dispatch(setDeck(response.data));
      }
   });
 };

export default function fetchDeck() {
 return dispatch => {
  return initialData(dispatch);
 }
}

function setDeck(data) {
  return { type: 'GET_DECK', data: data };
}