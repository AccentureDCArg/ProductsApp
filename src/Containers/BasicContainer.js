import React, { Component } from 'react';
import { connect } from 'react-redux';
import Basic from '../Components/Basic';
import axios from 'axios';
import { eraseVersion, newVersion } from '../redux/actions/app_actions';

class BasicContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product : {}
        };
    }
    handleClick() {
        const { dispatch } = this.props;
        dispatch(eraseVersion());
    }

    handleNewVersionClick() {
        const { dispatch } = this.props;
        dispatch(newVersion());
    }
    componentDidMount() {
        axios(
            {
                method: 'GET',
                url: 'https://api.mercadolibre.com/items/MLA631609359',
                headers: {
                    'Content-Type':'application/json'
                }
            }
        )
        .then((res) => {
            console.log(res.data);
            
            const product = {};
            product.product_name = res.data.id;
            product.description = res.data.title;
            product.image = res.data.pictures[0].url;
            this.setState({
                product : product
            });
        })
        .catch((err) => {
            console.error(err);
        });
    }

    render() {

        return (
            <Basic
            product = { this.state.product }
            onClick = { this.handleClick.bind(this) }
            onClickNewVersion = { this.handleNewVersionClick.bind(this) }
            />
        );
    }
}

export default connect()(BasicContainer);