import React from 'react';
// const capitalize = require('capitalize')
// import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';

const Badge = (props) => {
    

    return (
        <div className="badge" id={props.id}>
            <div className="badge-symbol" style={{backgroundColor:props.color}} >
                {props.symbol}
            </div>
            <h2 className="badge-value">{props.value}</h2>
            <h4 className="badge-description">{props.description}</h4>
        </div>
    )
}
        
export default Badge;
