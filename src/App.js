import React, { Component } from 'react';
import { Container, Header, Form } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
];
const options2 = [
  { key: '2a', text: '2nd - A', value: '2a' },
  { key: '2b', text: '2nd - B', value: '2b' },
  { key: '4a', text: '4th - A', value: '4a' },
  { key: '4b', text: '4th - B', value: '4b' },
  { key: '6', text: '6th', value: '6' }
];
const options3 = [
  { key: 'c', text: 'C', value: 'c' },
  { key: 'cpp', text: 'C++', value: 'cpp' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'cs', text: 'C#', value: 'cs' },
  { key: 'java', text: 'Java', value: 'java' },
  { key: 'js', text: 'JavaScript', value: 'js' },
  { key: 'php', text: 'PHP', value: 'php' }
];
const options4 = [
  { key: 'android', text: 'Android App Development', value: 'android' },
  { key: 'web', text: 'Web Development', value: 'web' },
  { key: 'robotics', text: 'Robitics', value: 'robotics' },
  { key: 'graphics', text: 'Graphics Design', value: 'graphics' },
  { key: 'game', text: 'Game Development', value: 'game' },
  { key: 'webd', text: 'Web Design', value: 'webd' }
];
class App extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" size="huge" textAlign="center">
          Daffodil Polytechnic Institute - Computer Club
        </Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="Board Roll" placeholder="Board Roll" />
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="Gender"
              options={options}
              placeholder="Gender"
            />
            <Form.Select
              fluid
              label="Semester"
              options={options2}
              placeholder="Semester"
            />
            <Form.Select
              fluid
              label="Prefered Language"
              options={options3}
              placeholder="Prefered Language"
            />
            <Form.Select
              fluid
              label="Prefered Platform"
              options={options4}
              placeholder="Prefered Platform"
            />
          </Form.Group>
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}

export default App;
