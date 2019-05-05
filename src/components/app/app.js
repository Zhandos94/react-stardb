import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from "../item-list";
import PersonDetails from "../person-details";

const App = () => {
    return (
        <div>

            <Header/>
            <RandomPlanet/>

            <div className="row">
                <div className="col-12 col-lg-6">
                    <ItemList/>
                </div>
                <div className="col-12 col-lg-6">
                    <PersonDetails/>
                </div>
            </div>

        </div>
    );
};


export default App;
