import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../service/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye color" />

            </ItemDetails>);

        const startshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye color" />
            </ItemDetails>);

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header/>
                    <RandomPlanet/>

                    {/*<PeoplePage />*/}

                    <Row left={startshipDetails} right={personDetails}/>

                </div>
            </ErrorBoundry>
        );
    }
};