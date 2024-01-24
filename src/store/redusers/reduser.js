import { SET_GUESS, SET_FEEDBACK, RESET_GAME } from '../action/action';

const initialState = {
  secretNumber: Math.floor(Math.random() * 100),
  guess: null,
  feedback: '',
  guessed: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GUESS:
      return {
        ...state,
        guess: action.payload,
      };
    case SET_FEEDBACK:
      return {
        ...state,
        feedback: action.payload,
      };
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
