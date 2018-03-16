import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import List from './components/List';
import FormPage from './components/Form';
class App extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" size="huge" textAlign="center">
          Daffodil Polytechnic Institute - Computer Club
        </Header>
        <Header as="h2">Add a student</Header>
        <FormPage />
        <Header as="h2">Students</Header>
        <List />
      </Container>
    );
  }
}

export default App;
