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

export default class App extends Component {


    render() {

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header/>

                    <RandomPlanet/>

                    <PersonDetails itemId={11}/>

                    <PlanetDetails itemId={5}/>

                    <StartshipDetails itemId={9}/>

                    <PersonList />

                    <PlanetList />

                    <StarhipList />


                    {/*<Row left={startshipDetails} right={personDetails}/>*/}


                </div>
            </ErrorBoundry>
        );
    }
};