import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import './assets/styles/style.scss';
import ResumeFormPage from '../pages/ResumeFormPage';
import Counter from '../components/Counter';

function App() {
  return (
    <div className="App m-5">
      <Provider store={store}>
        <Counter />
        <ResumeFormPage />
      </Provider>
    </div>
  );
}

export default App;
