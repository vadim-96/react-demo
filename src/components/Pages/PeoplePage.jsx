import React from 'react';
import { withRouter } from 'react-router-dom';

import { PersonList, PersonDetails } from '../SwComponents';
import Row from '../Row/Row';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      left={<PersonList onItemSelected={(id) => history.push(id)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default withRouter(PeoplePage);
