// Imports de librerías externas
import React, { Component } from 'react';

// Imports de componentes internos

// Imports de Constantes y hojas de estilo

class App extends Component {

    render() {
        return (
            <header>
                <h1>{ this.props.application.name + " version - " + this.props.application.version } </h1>
            </header>
        );
    }
}

export default App;