import React, { Component } from 'react';
import { deathDate, percentComplete, timeRemaining } from '../utils/deathDate';
import { Card, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import Header from './header';
import Clock from './clock';
import Footer from './footer';
import { formatDate } from '../utils/format';

const interval = 10;

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
        this.timer = setTimeout(() => this.updateDates(), interval);
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
        this.timer = setTimeout(() => this.updateDates(), interval);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        let { deathDate, remaining, completed } = this.state;
        const cardStyle = {
            marginTop: "150px",
            marginLeft: "100px",
            marginRight: "100px"
        }
        const progressStyle = {
            height: "100px"
        }
        return (
            <Card style={cardStyle}>
                <CardText>
                    <Clock remaining={remaining} />
                    <Header label={"You will die on " + formatDate(deathDate)} />
                </CardText>
                <LinearProgress color="#ff4081" style={progressStyle} mode="determinate" value={completed} />
                <br />
                <Header label={completed + "% of your life is over"} />
                <br />
                <Footer />
            </Card>
        )
    }
}