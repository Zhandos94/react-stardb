import React, {Component} from 'react';
import './item-details.css';
import SwapiService from "../../service/swapi-service";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ field }</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.personId !== prevProps.personId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) return false;


        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            });
    }

    render() {
        const {item, image} = this.state;
        if(!this.state.item) return <span>Select a item from list</span>;
        const {id, name, gender, birthDate, eyeColor} = item;

        return (
            <div className="item-details card">
                <img className="item-image" alt="peron"
                     src={image}/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {this.props.children}
                    </ul>
                </div>
            </div>
        );
    }
}