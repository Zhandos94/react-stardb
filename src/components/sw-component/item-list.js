import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService, withChildFunction, compose} from '../hoc-helper';

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

const PersonList = compose(withSwapiService(mapPersonMethodToProps), withData, withChildFunction(renderName))(ItemList);

const PlanetList = compose(withSwapiService(mapPlanetMethodToProps), withData, withChildFunction(renderName))(ItemList);

const StarhipList = withSwapiService(mapStarshipsMethodToProps)(withData(withChildFunction(renderModelName)(ItemList)));

export {
    PersonList,
    PlanetList,
    StarhipList,
}
