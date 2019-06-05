import React, {Component} from 'react';
import './person-details.css';
import SwapiService from "../../service/swapi-service";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
    };

    componentDidMount() {
        this.personUpdate();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        if(this.props.personId !== prevProps.personId) {
            this.personUpdate();
        }
    }

    personUpdate() {
        const {personId} = this.props;
        if (!personId) return false;

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({person});
            });
    }

    render() {
        console.log('render')

        if(!this.state.person) return <span>Select a person from list</span>;
        const {id, name, gender, birthDate, eyeColor} = this.state.person;

        return (
            <div className="person-details card">
                <img className="person-image" alt="peron"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthDate}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}