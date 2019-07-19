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


const PersonList = WithData(ItemList, getAllPeople);

const PlanetList = WithData(ItemList, getAllPlanets);

const StarhipList = WithData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarhipList,
}
