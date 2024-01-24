export const SET_GUESS = 'SET_GUESS';
export const SET_FEEDBACK = 'SET_FEEDBACK';
export const RESET_GAME = 'RESET_GAME';

export const setGuess = (guess) => ({
  type: SET_GUESS,
  payload: guess,
});

export const setFeedback = (feedback) => ({
  type: SET_FEEDBACK,
  payload: feedback,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
