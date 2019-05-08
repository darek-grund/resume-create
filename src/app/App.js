import React from 'react';
import Chip from '../components/Chip/Chip';
import './App.css';

const skills = [
  {
    title: 'Example Chip',
    level: 3,
  },
  {
    title: 'Vue.js',
    level: 4,
  },
  {
    title: 'JavaScript',
    level: 3,
  },
];

function App() {
  return (
    <div className="App">
      {skills.map(skill => (
        <Chip close>{skill.title}</Chip>
      ))}
    </div>
  );
}

export default App;
