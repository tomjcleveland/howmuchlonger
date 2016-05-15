import React, { Component } from 'react';
import { deathDate, percentComplete, timeRemaining } from '../utils/deathDate';
import { Card, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';

export default class Countdown extends Component {
    constructor(props) {
        super(props);
        var bdayMillis = Number(this.props.params.birthday);
        var birthday = new Date(bdayMillis);
        var isMale = this.props.params.gender == "male";
        this.state = {
            deathDate: deathDate(birthday, isMale),
            completed: percentComplete(birthday, isMale),
            remaining: timeRemaining(birthday, isMale)
        };
    }
    componentDidMount() {
        this.timer = setTimeout(() => this.updateDates(), 1000);
    }
    updateDates() {
        var bdayMillis = Number(this.props.params.birthday);
        var birthday = new Date(bdayMillis);
        var isMale = this.props.params.gender == "male";
        var newState = {
            deathDate: deathDate(birthday, isMale),
            completed: percentComplete(birthday, isMale),
            remaining: timeRemaining(birthday, isMale)
        };
        this.setState(newState);
        this.timer = setTimeout(() => this.updateDates(), 1000);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        let { deathDate } = this.state;
        return (
            <Card>
                <CardText>
                    <h4>You have {this.state.remaining.years} years, {this.state.remaining.days} days, {this.state.remaining.hours} hours, {this.state.remaining.minutes} minutes, and {this.state.remaining.seconds} seconds left to live.</h4>
                    <h1>You will die on {deathDate.toString() }</h1>
                </CardText>
                <LinearProgress mode="determinate" value={this.state.completed} />
                <br />
                <h1>{this.state.completed}% of your life is over</h1>
            </Card>
        )
    }
}