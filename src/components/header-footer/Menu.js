import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './style.css';
import Button from '@material-ui/core/Button';
export default class Menu extends Component {

    state = {
        buttons: [
            { text: "Contact" },
            { text: "About us" },
            { text: "Work" },
        ]
    }


    render() {
        return (
            <AppBar
                position="static"
                style={this.props.noBcg ? { background: "none", boxShadow: "none" } : { boxShadow: "none" }}
            >
                <Toolbar className="header-nav">
                    {this.state.buttons.map((button, i) => (
                        <Button>
                            <div className="header-nav_button">
                                {button.text}
                            </div>
                        </Button>
                    ))
                    }
                </Toolbar>
            </AppBar>

        )
    }
}
