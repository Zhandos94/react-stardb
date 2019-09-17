import React, {Component} from 'react';
import Row from "../row";
import {StarhipList, StarshipDetails} from "../sw-component";

export default class StarshipPage extends Component {
    state = {
        selectedItem: null,
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        const {selectedItem} = this.state;

        return (
            <Row left={<StarhipList onItemSelected={this.onItemSelected}/>} right={<StarshipDetails itemId={selectedItem}/>}/>
        );
    }
}

