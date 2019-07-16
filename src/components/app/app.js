import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../service/swapi-service";
import PeoplePage from "../people-page";
import Error from "../error";

export default class App extends Component {

    state = {
        selectedPerson: 4,
        hasError: false
    };

    swapiService = new SwapiService();

    onPersonSelected = (id) => {
        console.log(id);
        this.setState({
            selectedPerson: id
        })
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }


    render() {
        if (this.state.hasError) {
            return <Error />
        }

        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <PeoplePage />

                <div className="row">
                    <div className="col-12 col-lg-6">
                        <ItemList
                            getData={this.swapiService.getAllPeople}
                            onItemSelected={this.onPersonSelected}>
                            {(item) =>
                                (`${item.name} (${item.birthYear})`
                                )}
                        </ItemList>
                    </div>

                    <div className="col-12 col-lg-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

            </div>
        );
    }
};