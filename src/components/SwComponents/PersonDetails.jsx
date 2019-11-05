import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withSwapiService } from '../HocHelpers';

const PersonDetails = props => { // { itemId, getData, getImageUrl }
  return (
    <ItemDetails {...props}>
      {/* itemId={itemId}
      getData={getData}
      getImageUrl={getImageUrl}> */}

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
