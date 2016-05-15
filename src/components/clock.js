import React, { Component } from 'react';

export default class Clock extends Component {
    render() {
        const { remaining } = this.props;
        const style = {
            fontFamily: "Courier, monospace",
            textAlign: "center",
            fontSize: "30px"
        }
        return (
            <div style={style}>
            You have {remaining.years} years, {remaining.days} days, and {remaining.hours}:{remaining.minutes}:{remaining.seconds} left to live.
            </div>
        )
    }
}