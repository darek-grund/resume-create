import React from 'react';
import Card from '../components/Card';
import Chip from '../components/Chip';
import Button from '../components/Button';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
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
      <Card>
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

        <div>
          <TextArea placeholder="Share more details" />
        </div>
      </Card>
    </div>
  );
}

export default App;
