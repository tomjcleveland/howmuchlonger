import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import { Card, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionHelpOutline from 'material-ui/svg-icons/action/help-outline';
import SvgIcon from 'material-ui/SvgIcon';

import Info from './info';
import GitHubIcon from '../icons/github';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            helpInfo: false
        };
    }
    openInfo() {
        this.refs.helpDialog.handleOpen();
    }
    render() {
        const centered = {
            margin: "auto",
            textAlign: "center"

        }
        return (
            <div>
                <Divider />
                <Card>
                    <CardText style={centered}>
                        <div style={centered}>
                            <IconButton onTouchTap={this.openInfo.bind(this) }>
                                <ActionHelpOutline />
                            </IconButton>
                            <a href="https://github.com/tomjcleveland/howmuchlonger" target="_blank">
                                <IconButton>
                                    <GitHubIcon />
                                </IconButton>
                            </a>
                        </div>
                    </CardText>
                </Card>
                <Info ref="helpDialog" />
            </div>
        )
    }
}