import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGuess, setFeedback, resetGame } from '../../store/action/action';

const Guess = () => {
  const dispatch = useDispatch();
  const { secretNumber, guess, feedback, guessed } = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess === null) {
      return;
    }

    if (guess === secretNumber) {
      dispatch(setFeedback('Поздравляем, вы отгадали число!'));
    } else if (guess < secretNumber) {
      dispatch(setFeedback('Не правильно, берите выше.'));
    } else {
      dispatch(setFeedback('Не правильно, берите ниже.'));
    }
  };

  const handleInputChange = (e) => {
    dispatch(setGuess(parseInt(e.target.value, 10)));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ваш вариант:
          <input
            type="number"
            value={guess !== null ? guess : ''}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Проверить</button>
      </form>
      <p>{feedback}</p>
      {guessed && (
        <div>
          <button onClick={() => dispatch(resetGame())}>Заново</button>
        </div>
      )}
    </div>
  );
};

export default Guess;
