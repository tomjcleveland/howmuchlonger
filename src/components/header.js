import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const { label } = this.props;
        const headerStyle = {
            textAlign: "center"
        }
        return (
            <h1 style={headerStyle}>{label}</h1>
        )
    }
}