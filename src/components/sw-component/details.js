import React from 'react';
import ItemDetails from '../item-details';
import Record from "../record";
import SwapiService from '../../service/swapi-service';

const swapiServie = new SwapiService();

const {getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage} = swapiServie;

const PersonDetails = ({itemId}) => {
    console.info(itemId);

    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>

            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye color"/>

        </ItemDetails>
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>

            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation period"/>
            <Record field="diameter" label="Diameter"/>

        </ItemDetails>
    );
};

const StartshipDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}>

            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>

        </ItemDetails>
    );
};


export {
    PersonDetails,
    PlanetDetails,
    StartshipDetails
}
