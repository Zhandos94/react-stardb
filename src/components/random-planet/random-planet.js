import React, {Component} from 'react';
import Spinner from "../spinner";
import SwapiService from "../../service/swapi-service";
import './random-planet.css';
import Error from "../error";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    static defaultProps = {
        updateInterval: 2000
    };

    static propTypes = {
        updateInterval: (props, propsName, componentName) => {
            const value = props[propsName];
            if(typeof value === 'number' && !isNaN(value)) {
                return null;
            }

            return  new TypeError(`${componentName} : ${propsName} must be number`)
        }
    };

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };


    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const {planet, loading, error} = this.state;
        const errorMessage = error ? <Error/> : null;
        const spinner = loading ? <Spinner/> : error;
        const content = !(loading || error) ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    };
};

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <img className="planet-image" alt="planet"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div>
                <h4> {name} </h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span> {population} </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span> {rotationPeriod} </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span> {diameter} </span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};