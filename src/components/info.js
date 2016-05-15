import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

export default class Help extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    handleClose() {
        this.setState({isOpen: false});
    }
    handleOpen() {
        this.setState({isOpen: true});
    }
    render() {
        return (
            <Dialog
                title="How is this calculated?"
                modal={false}
                open={this.state.isOpen}
                onRequestClose={this.handleClose.bind(this)}
                >
                Good question. Life expectancies for every age are published by the US Social Security Administration 
                <a href="https://www.ssa.gov/oact/STATS/table4c6.html">here</a>. Since the values in that table
                are discrete, I estimate the real life expectency by assuming the life expectancy over a year
                decays linearly between the two values. It doesn't, but it's close enough.
                <br />
                <br />
                If you stare at this clock long enough, you'll notice that your expected death date will creep slowly
                into the future. This happens because as time passes and you're still alive, the average life
                expectancy of your cohort increases, since the people who were really bringing your cohort down
                have died. Congratulations.
                <br />
                <br />
                <strong>Disclaimer:</strong> I am not a licensed physician, these are only statistical averages, blah
                blah, blah.
            </Dialog>
        )
    }
}