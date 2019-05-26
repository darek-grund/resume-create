import React from 'react';

import ResumeBasicInformation from '../../containers/ResumeBasicInformation';

import Card from '../../components/Card';
import Chip from '../../components/Chip';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';

// TODO - move to store
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

const ResumeFormPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <ResumeBasicInformation />
          <Card>
            <h2 className="mb-5">Skills</h2>
            <div className="mb-4">
              <TextField placeholder="Add new skill" />
              <div className="mt-2">
                <small className="text-muted mb-5">
                  Skills that you add here will be available in other sections such as &quot;Work
                  Experience&quot;.
                </small>
              </div>
            </div>
            <div className="mb-4">
              {skills.map(skill => (
                <Chip key={skill.id} close>
                  {skill.title}
                </Chip>
              ))}
            </div>
            <div className="d-flex justify-content-end mb-4">
              <Button>Save</Button>
            </div>
          </Card>

          <Card>
            <h2 className="mb-5">Work Experience</h2>

            <div>
              <div className="mb-4">
                <TextField placeholder="Role" />
              </div>
              <div className="mb-4">
                <TextField placeholder="Company" />
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <TextField placeholder="Start date" />
                </div>
                <div className="col-md-6 mb-4">
                  <TextField placeholder="End date" />
                </div>
              </div>
              <div className="mb-4">
                <TextArea placeholder="Responsibilities" />
              </div>
              <div className="mb-4">
                <h3 className="text-muted mb-2">Technologies</h3>
                {skills.map(skill => (
                  <Chip key={skill.id} close>
                    {skill.title}
                  </Chip>
                ))}
              </div>
              <div className="d-flex justify-content-between mb-4">
                <Button flat>Cancel</Button>
                <Button>Save</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResumeFormPage;
