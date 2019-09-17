import React, {Component} from 'react';
import './item-details.css';

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl
        ) {
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
        const { name } = item;

        return (
            <div className="item-details card">
                <img className="item-image" alt="peron"
                     src={image}/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                               return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}