import React from 'react';
import ItemDetails from "../item-details";
import Record from "../record";
import { withSwapiService } from '../hoc-helper';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>

            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye color"/>

        </ItemDetails>
    );
};

const mapMethodToProps = (swapiService) => {
    return {
     getData: swapiService.getPerson,
     getImageUrl: swapiService.getPersonImage,
    }
};

export default withSwapiService(PersonDetails, mapMethodToProps);

