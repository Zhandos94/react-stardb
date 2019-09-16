import React from 'react';
import ItemDetails from "../item-details";
import Record from "../record";
import {withSwapiService} from "../hoc-helper";

const StartshipDetails = (props) => {
    return (
        <ItemDetails {...props}>

            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>

        </ItemDetails>
    );
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
};


export default withSwapiService(StartshipDetails, mapMethodToProps);

