import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../service/swapi-service";
import Record from "../record";
import {
    PersonList,
    PlanetList,
    StarhipList,
} from '../sw-component';
import ItemList from "../item-list";

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

                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />

            </ItemDetails>);

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header/>
                    <RandomPlanet/>

                    <PersonList>
                        {({name}) => <span>{name}</span>}
                    </PersonList>

                    <PlanetList>
                        {({name}) => <span>{name}</span>}
                    </PlanetList>

                    <StarhipList>
                        {({name}) => <span>{name}</span>}
                    </StarhipList>

                    {/*<PeoplePage />*/}
                    {/*<Row left={startshipDetails} right={personDetails}/>*/}

                </div>
            </ErrorBoundry>
        );
    }
};