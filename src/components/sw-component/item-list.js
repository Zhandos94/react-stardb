import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc-helper';

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
    withData(
        withChildFunction(ItemList, renderName)),
    mapPersonMethodToProps
);

const PlanetList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)),
    mapPlanetMethodToProps
);

const StarhipList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderModelName)),
    mapStarshipsMethodToProps
);

export {
    PersonList,
    PlanetList,
    StarhipList,
}
