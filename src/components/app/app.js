import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";

import {
    PersonList,
    PlanetList,
    StarhipList,
    PersonDetails, PlanetDetails, StartshipDetails,
} from '../sw-component';

import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../service/swapi-service";
import DummySwapiService from "../../service/dummy-swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>

                    <div className="stardb-app">

                        <Header/>

                        <RandomPlanet/>

                        <PersonDetails itemId={11}/>

                        <PlanetDetails itemId={5}/>

                        <StartshipDetails itemId={9}/>

                        <PersonList/>

                        <PlanetList/>

                        <StarhipList/>


                        {/*<Row left={startshipDetails} right={personDetails}/>*/}

                    </div>

                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};