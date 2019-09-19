import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../service/swapi-service";
import DummySwapiService from "../../service/dummy-swapi-service";
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";

export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            }
        });
    };

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>

                    <div className="stardb-app">

                        <Header onServiceChange={this.onServiceChange}/>

                        <RandomPlanet updateInterval ={2000} />

                        <PeoplePage/>

                        <PlanetPage/>

                        <StarshipPage/>

                    </div>

                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};