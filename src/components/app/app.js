import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";
import Error from "../error";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class App extends Component {

    render() {

        // const personDetails = (<ItemDe);
        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header/>
                    <RandomPlanet/>

                    <PeoplePage />

                    {/*<Row left={} right={}/>*/}

                </div>
            </ErrorBoundry>
        );
    }
};