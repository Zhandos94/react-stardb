import React from 'react';
import {StarhipList} from "../sw-component";
import {withRouter} from 'react-router-dom';

const StarshipPage = ({history}) => {
    return (
        <StarhipList onItemSelected = {(itemId) => history.push(itemId)}/>
    );
};

export default withRouter(StarshipPage);