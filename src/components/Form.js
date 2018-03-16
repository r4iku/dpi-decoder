import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addStudent } from '../actions/index';
import { Container, Form } from 'semantic-ui-react';
import { gender, semester, language, platform } from './FormOptions';

const mapDispatchToProps = dispatch => {
  return {
    addStudent: student => dispatch(addStudent(student))
  };
};
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      roll: '',
      fname: '',
      lname: '',
      about: '',
      genderSelect: '',
      semesterSelect: '',
      languageSelect: '',
      platformSelect: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSelect(event, { id, value }) {
    this.setState({ [id]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const {
      roll,
      fname,
      lname,
      about,
      genderSelect,
      semesterSelect,
      languageSelect,
      platformSelect
    } = this.state;
    const id = uuidv1();
    this.props.addStudent({
      id,
      roll,
      fname,
      lname,
      about,
      genderSelect,
      semesterSelect,
      languageSelect,
      platformSelect
    });
    this.setState({
      roll: '',
      fname: '',
      lname: '',
      about: '',
      genderSelect: '',
      semesterSelect: '',
      languageSelect: '',
      platformSelect: ''
    });
  }
  render() {
    const {
      roll,
      fname,
      lname,
      about,
      genderSelect,
      semesterSelect,
      languageSelect,
      platformSelect
    } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Board Roll"
              placeholder="Board Roll"
              onChange={this.handleChange}
              id="roll"
              value={roll}
            />
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
              onChange={this.handleChange}
              id="fname"
              value={fname}
            />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              onChange={this.handleChange}
              id="lname"
              value={lname}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="Gender"
              options={gender}
              placeholder="Gender"
              onChange={this.handleSelect}
              id="genderSelect"
              value={genderSelect}
            />
            <Form.Select
              fluid
              label="Semester"
              options={semester}
              placeholder="Semester"
              onChange={this.handleSelect}
              id="semesterSelect"
              value={semesterSelect}
            />
            <Form.Select
              fluid
              label="Prefered Language"
              options={language}
              placeholder="Prefered Language"
              onChange={this.handleSelect}
              id="languageSelect"
              value={languageSelect}
            />
            <Form.Select
              fluid
              label="Prefered Platform"
              options={platform}
              placeholder="Prefered Platform"
              onChange={this.handleSelect}
              id="platformSelect"
              value={platformSelect}
            />
          </Form.Group>
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
            onChange={this.handleChange}
            id="about"
            value={about}
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}
const FormPage = connect(null, mapDispatchToProps)(ConnectedForm);
export default FormPage;
