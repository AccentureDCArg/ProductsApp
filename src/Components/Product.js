// Imports de librerías externas
import React, { Component } from 'react';

// Imports de componentes internos

// Imports de Constantes y hojas de estilo

class Product extends Component {

    render() {
        return (
            <article>
                <p>{ this.props.children }</p>
                <img src={ this.props.image } />
            </article>
        );
    }
}

export default Product;