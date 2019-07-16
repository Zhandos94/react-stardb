import React, {Component} from 'react';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error/error';
import './people-page.css';
import SwapiService from "../../service/swapi-service";

const Row = ({left, right}) => {
    console.log(left);
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
};

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
        hasError: false
    };

    componentDidCatch(error, info) {

        this.setState({
            hasError: true
        });
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(item) =>
                    (`${item.name} (${item.birthYear})`
                    )}
            </ItemList>
        );

        const personDetails = <PersonDetails personId={this.state.selectedPerson}/>;

        return (
            <Row left={itemList} right={personDetails}/>
        );

    }
}