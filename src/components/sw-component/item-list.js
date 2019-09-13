import React from 'react';
import ItemList from '../item-list';
import WithData from '../hoc-helper';
import SwapiService from '../../service/swapi-service';

const swapiServie = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiServie;

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


const PersonList = WithData(
    withChildFunction(ItemList, renderName),
    getAllPeople);

const PlanetList = WithData(
    withChildFunction(ItemList, renderName)
    , getAllPlanets
);

const StarhipList = WithData(
    withChildFunction(ItemList, renderModelName),
    getAllStarships
);

export {
    PersonList,
    PlanetList,
    StarhipList,
}
