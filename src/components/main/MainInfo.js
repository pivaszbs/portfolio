import React from 'react';
import './style.css';
const MainInfo = (props) => {
    return (
        <div className="main-info">
            <div className="company-name">
                Andrey <span className="company-surname">Logachev</span>
            </div>
            <span className="workplace">Graphic designer | Web designer</span>
        </div>
    );
};

export default MainInfo;