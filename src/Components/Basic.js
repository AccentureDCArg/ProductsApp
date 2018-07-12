import React, { Component } from 'react';
import './Basic.css';
import Button from './Button';
import { ButtonGaliciaPrimary  } from './Button';
import Product from './Product';

class Basic extends Component {
    render() {
        return (
            <article className="product-profile">
                <header>
                    <h1>{ this.props.product.product_name }</h1>
                </header>
                <Product image = {this.props.product.image}>
                    { this.props.product.description }
                </Product>
                <ButtonGaliciaPrimary>
                    Comprar Producto
                </ButtonGaliciaPrimary>
                <Button onClick={ this.props.onClick }>
                    Eliminar Version
                </Button>
                <Button primary onClick={ this.props.onClickNewVersion }>
                    Agregar Version
                </Button>
            </article>
        );
    }
}

export default Basic; 