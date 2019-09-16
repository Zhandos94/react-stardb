import React from 'react';
import ItemList from '../item-list';
import {WithData, withSwapiService} from '../hoc-helper';

const withChildFunction = (Wrapped, fn) => {
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

const PersonList = withSwapiService(
    WithData(
        withChildFunction(ItemList, renderName)),
    mapPersonMethodToProps
);

const PlanetList = withSwapiService(
    WithData(
        withChildFunction(ItemList, renderName)),
    mapPlanetMethodToProps
);

const StarhipList = withSwapiService(
    WithData(
        withChildFunction(ItemList, renderModelName)),
    mapStarshipsMethodToProps
);

export {
    PersonList,
    PlanetList,
    StarhipList,
}
