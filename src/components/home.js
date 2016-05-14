import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends Component {
    render() {
        const divStyle = {
            margin: "auto"
        }
        const cardStyle = {
            width: "400px"
        }
        return (
            <div style={divStyle}>
                <Card style={cardStyle}>
                    <CardHeader title="How much longer you do have?" subtitle="Let's find out" />
                    <CardText>
                        <DatePicker maxDate={new Date()} mode="landscape" hintText="Your birthday" />
                        <br />
                        <RadioButtonGroup name="sex">
                            <RadioButton label="Male" value="male"/>
                            <RadioButton label="Female" value="female" />
                        </RadioButtonGroup>
                        <br />
                        <RaisedButton secondary={true} label="Predict Death" />
                    </CardText>
                </Card>
            </div>
        )
    }
}