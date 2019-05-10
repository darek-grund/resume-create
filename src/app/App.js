import React from 'react';
import Card from '../components/Card';
import Chip from '../components/Chip';
import Button from '../components/Button';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import './assets/styles/bootstrap.scss';
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
    <div className="App m-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <Card>
              <div className="mb-5">
                {skills.map(skill => (
                  <Chip key={skill.id} close>
                    {skill.title}
                  </Chip>
                ))}
              </div>

              <div className="mb-5">
                <Button>Continue</Button>
                <Button flat>Cancel</Button>
              </div>

              <div>
                <div className="mb-4">
                  <TextField placeholder="First Name" />
                </div>
                <div className="mb-4">
                  <TextField placeholder="Last Name" />
                </div>
                <div>
                  <TextArea placeholder="Share more details" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
