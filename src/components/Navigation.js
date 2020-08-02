import React from 'react';

export default function Navigation(props) {
    return (
      <nav>
        <div style={{flex:1}}>
          <input className="search-input" />
          <button className="search-btn"><i className="fa fa-search"></i></button>
          <button className="temp-switch">
            <i
              className="fa fa-thermometer-empty"
              aria-hidden="true"
              style={{paddingRight:5}}
            ></i>
            <sup>&deg;</sup>C
          </button>
        </div>
      </nav>
    );
}
