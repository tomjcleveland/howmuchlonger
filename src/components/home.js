import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { navigateToCountdown } from '../utils/navigate';
import Footer from './footer';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canSubmit: false,
            gender: "",
            birthday: null
        };
    }
    handleGenderChange(e) {
        var nextState = this.state;
        nextState.gender = e.target.value;
        this.setState(nextState);
        this.checkDisabledButton();
    }
    handleBirthdayChange(e, date) {
        var nextState = this.state;
        nextState.birthday = date;
        this.setState(nextState);
        this.checkDisabledButton();
    }
    checkDisabledButton() {
        if ((this.state.gender == "male" || this.state.gender == "female") && this.state.birthday) {
            this.state.canSubmit = true;
        }
    }
    toCountdown() {
        navigateToCountdown(this.state.gender, this.state.birthday);
    }
    render() {
        const divStyle = {
            margin: "auto",
        }
        const cardStyle = {
            marginTop: "200px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "300px"
        }
        const titleStyle = {
            textAlign: "center"
        }
        return (
            <div style={divStyle}>
                <Card style={cardStyle}>
                    <CardTitle style={titleStyle} title="How much longer?" />
                    <CardText>
                        <div>
                            <DatePicker onChange={this.handleBirthdayChange.bind(this) } maxDate={new Date()} minDate={new Date(1800, 1, 1)} mode="landscape" hintText="Your birthday" />
                            <br />
                            <RadioButtonGroup name="sex" onChange={this.handleGenderChange.bind(this) }>
                                <RadioButton label="Male" value="male"/>
                                <RadioButton label="Female" value="female" />
                            </RadioButtonGroup>
                            <br />
                            <RaisedButton disabled={!this.state.canSubmit} onTouchTap={this.toCountdown.bind(this) } secondary={true} label="Predict Death" />
                        </div>
                    </CardText>
                    <br />
                    <Footer />
                </Card>
            </div>
        )
    }
}