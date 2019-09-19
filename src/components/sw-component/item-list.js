import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc-helper';

const withChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({name}) => <span> {name} </span>;

const renderModelName = ({model, name}) => <span> {name} ({model}) </span>;


const mapPersonMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapPlanetMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const mapStarshipsMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList = withSwapiService(mapPersonMethodToProps)(withData(withChildFunction(renderName)(ItemList)));

const PlanetList = withSwapiService(mapPlanetMethodToProps)(withData(withChildFunction(renderName)(ItemList)));

const StarhipList = withSwapiService(mapStarshipsMethodToProps)(withData(withChildFunction(renderModelName)(ItemList)));



export {
    PersonList,
    PlanetList,
    StarhipList,
}
