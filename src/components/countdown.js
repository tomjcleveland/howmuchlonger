import React, { Component } from 'react';
import { deathDate } from '../utils/deathDate';
import { Card, CardText } from 'material-ui/Card';

export default class Countdown extends Component {
    constructor(props) {
        super(props);
        var bdayMillis = Number(this.props.params.birthday);
        var gender = this.props.params.gender;
        this.state = {
            deathDate: deathDate(new Date(bdayMillis), gender == "male")
        }
    }
    render() {
        let { deathDate } = this.state;
        return (
            <Card>
                <CardText>
                    <h1>You will die on {deathDate.toString() }</h1>
                </CardText>
            </Card>
        )
    }
}