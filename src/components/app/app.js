import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../service/swapi-service";
import DummySwapiService from "../../service/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";
import {BrowserRouter as Router, Route} from "react-router-dom";
import StarshipDetails from "../sw-component/starship-details";

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

                    <Router>
                        <div className="stardb-app">

                            <Header onServiceChange={this.onServiceChange}/>

                            <RandomPlanet updateInterval={2000}/>

                            <Route
                                path="/"
                                render={() => <h2>Welcome to StartDB</h2>}
                                exact
                            />
                            <Route path="/people" component = {PeoplePage}/>
                            <Route path="/planet" component = {PlanetPage}/>
                            <Route path="/starship" exact component = {StarshipPage}/>
                            <Route
                                path="/starship/:id"
                                render = {({match}) => {
                                    const {id} = match.params;

                                    return <StarshipDetails itemId={id}/>
                                }}/>

                        </div>
                    </Router>

                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};