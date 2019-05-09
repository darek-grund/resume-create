import React from 'react';
import Chip from '../components/Chip';
import Button from '../components/Button';
import TextField from '../components/TextField';
import './App.css';

const skills = [
  {
    id: 1,
    title: 'Example Chip',
    level: 3,
  },
  {
    id: 2,
    title: 'Vue.js',
    level: 4,
  },
  {
    id: 3,
    title: 'JavaScript',
    level: 3,
  },
];

function App() {
  return (
    <div className="App">
      <div>
        {skills.map(skill => (
          <Chip key={skill.id} close>
            {skill.title}
          </Chip>
        ))}
      </div>

      <div>
        <Button>Continue</Button>
        <Button flat>Cancel</Button>
      </div>

      <div>
        <TextField placeholder="First Name" />
        <TextField placeholder="Last Name" />
      </div>
    </div>
  );
}

export default App;
