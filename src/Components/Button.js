import React, { Component } from 'react';
import styled from 'styled-components';
import './Button.css';

const ButtonGalicia = styled.button`
    margin: 1rem;
    background-color: ${ props => props.primary ? 'red' : 'white' };
    color: ${ props => props.primary ? 'white' : 'red' };    
`;

const ButtonGaliciaPrimary = ButtonGalicia.extend`
    padding: 1rem;
`;



class Button extends Component {
    render() {
        return (
            <ButtonGalicia
                primary = { this.props.primary }
                disabled = { this.props.disabled }
                onClick={ this.props.onClick }>
                { this.props.children }
            </ButtonGalicia>
        );
    }
}

export default Button;

export {
    ButtonGaliciaPrimary,
    Button
}