import React,{ Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { Button } from '@material-ui/core';
import './style.css';

export default class Menu extends Component {
    
    state = {
        buttons: [
            {text: "Contact", isOverline:false},
            {text: "About us", isOverline:true},
            {text: "Work", isOverline:false},
        ]
    }



  render() {
    return (
    <AppBar 
        position="static" 
        style={this.props.noBcg?{background:"none", boxShadow:"none"}:{boxShadow:"none"}}
    >
        <Toolbar className="header-nav">
            {this.state.buttons.map((button,i) => (
                <Button 
                key={i}
                >
                <div className="header-nav_button" 
                style={button.isOverline?{textDecoration:"overline"}:{textDecoration:"none"}}>
                    {`${button.text}`}
                </div>
            </Button>
            ))
            }
        </Toolbar>
    </AppBar>
    
    )
  }
}
