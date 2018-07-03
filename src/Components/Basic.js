import React, { Component } from 'react';
import './Basic.css';

class Basic extends Component {
    render() {
        return (
            <article className="product-profile">
                <header>
                    <h1>{ this.props.product.product_name }</h1>
                </header>
                <main>
                    <p>{ this.props.product.description }</p>
                    <img src={ this.props.product.image } />
                </main>
                <button onClick={ this.props.onClick }>
                    Eliminar Version
                </button>
                <button onClick={ this.props.onClickNewVersion }>
                    Agregar Version
                </button>
            </article>
        );
    }
}

export default Basic; 