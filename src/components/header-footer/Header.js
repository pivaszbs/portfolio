import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { Button } from '@material-ui/core';

class Header extends Component {

    render() {
        return (
            <AppBar position="fixed" style={{background:"none", boxShadow:"none"}}>
                <Toolbar className="header-nav">
                    <Button>
                        <div className="header-nav_button">
                            Contact
                        </div>
                    </Button>
                    <Button>
                        <div className="header-nav_button" style={{textDecoration:"overline"}}>
                            About me
                        </div>
                    </Button>
                    <Button>
                        <div className="header-nav_button">
                            Work
                        </div>
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;