// Imports de librerías externas
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Imports de componentes internos
import App from '../Components/App';
import { newVersion } from '../redux/actions/app_actions';
// Imports de Constantes y hojas de estilo

class AppContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(newVersion());
    }

    render() {
        return (
            <App application= { this.props.application } />
        );    
    }
}

function mapStateToProps(state) {
    var application = state.application;
    console.log(state.application);
    return { application };
}

export default connect(mapStateToProps)(AppContainer);