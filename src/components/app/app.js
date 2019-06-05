import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../service/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();


    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <div className="row">
                    <div className="col-12 col-lg-6">
                        <ItemList getData={this.swapiService.getAllPeople} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <PersonDetails/>
                    </div>
                </div>

            </div>
        );
    }
};