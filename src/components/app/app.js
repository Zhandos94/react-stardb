import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../service/swapi-service";

import {
    PersonList,
    PlanetList,
    StarhipList,
    PersonDetails,
} from '../sw-component';
import ItemList from "../item-list";

export default class App extends Component {

    swapiService = new SwapiService();

    render() {

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

                    <PersonDetails itemId={12}/>

                </div>
            </ErrorBoundry>
        );
    }
};