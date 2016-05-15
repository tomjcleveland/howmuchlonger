import React, { Component } from 'react';
import { deathDate, percentComplete } from '../utils/deathDate';
import { Card, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';

export default class Countdown extends Component {
    constructor(props) {
        super(props);
        var bdayMillis = Number(this.props.params.birthday);
        var isMale = this.props.params.gender == "male";
        this.state = {
            deathDate: deathDate(new Date(bdayMillis), isMale),
            completed: percentComplete(bdayMillis, isMale)
        }
    }
    render() {
        let { deathDate } = this.state;
        return (
            <Card>
                <CardText>
                    <h1>You will die on {deathDate.toString()}</h1>
                </CardText>
                <LinearProgress mode="determinate" value={this.state.completed} />
                <br />
                <h1>{this.state.completed}% of your life is over</h1>
            </Card>
        )
    }
}