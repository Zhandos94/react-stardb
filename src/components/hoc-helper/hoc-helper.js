import React, {Component} from 'react';
import Spinner from "../spinner";
import Error from "../error";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false
        };

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();

            this.setState({
                loading: true,
            })
        }

        update() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                }).catch(() => {
                    this.setState({
                        loading: false,
                        error: true
                    })
                });
        }

        render() {
            const {data, error} = this.state;

            if (error) {
                return <Error/>;
            }

            if (!data) {
                return <Spinner/>;
            }

            return <View {...this.props} data={data}/>
        }
    }
};

export default withData;