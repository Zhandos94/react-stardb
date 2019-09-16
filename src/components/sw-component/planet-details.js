import React from 'react';
import ItemDetails from "../item-details";
import Record from "../record";
import {withSwapiService} from '../hoc-helper';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>

            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation period"/>
            <Record field="diameter" label="Diameter"/>

        </ItemDetails>
    );
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
};

export default withSwapiService(PlanetDetails, mapMethodToProps);
