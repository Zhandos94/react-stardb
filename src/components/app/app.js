import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../service/swapi-service";

export default class App extends Component {

   state = {
       selectedPerson: 4,
   };

    swapiService = new SwapiService();

    onPersonSelected = (id) => {
        console.log(id);
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <div className="row">
                    <div className="col-12 col-lg-6">
                        <ItemList getData={this.swapiService.getAllPeople} onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

            </div>
        );
    }
};