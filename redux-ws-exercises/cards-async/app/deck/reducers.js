import {GET_DECK} from './reducers';

const initialState = {
  cards: {}
};

const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DECK':
      state.cards = action.data.cards;
      return {
        ...state,
        cards: state.cards
      };
    default:
      return state;
  }
};

export default deckReducer;
