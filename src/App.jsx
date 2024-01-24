import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Guess ,GameResult} from './Components';



const App = () => (
  <Provider store={store}>
    <div>
      <h1>Угадай число от 0 до 100</h1>
      <Guess />
      <GameResult/>
    </div>
  </Provider>
);

export default App;
