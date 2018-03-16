import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react';

const mapStateToProps = state => {
  return { students: state.students };
};
const ConnectedList = ({ students }) => (
  <Card.Group>
    {students.map(el => (
      <Card key={el.id}>
        <Card.Content>
          <Card.Description>
            <strong>Name:</strong> {el.fname + ' ' + el.lname}
            <br />
            <strong>Roll:</strong> {el.roll}
            <br />
            <strong>About:</strong> {el.about}
            <br />
            <strong>Gender:</strong> {el.genderSelect}
            <br />
            <strong>Semester:</strong> {el.semesterSelect}
            <br />
            <strong>Language:</strong> {el.languageSelect}
            <br />
            <strong>Platform:</strong> {el.platformSelect}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          Member - DPI-Decoder
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;
