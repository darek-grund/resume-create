import React from 'react';
import Chip from '../components/Chip';
import Button from '../components/Button';
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
      <div>
        {skills.map(skill => (
          <Chip close>{skill.title}</Chip>
        ))}
      </div>

      <div>
        <Button>Continue</Button>
        <Button flat>Cancel</Button>
      </div>
    </div>
  );
}

export default App;
