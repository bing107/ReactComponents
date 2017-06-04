import React from 'react';


export default class Slider extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            
        }
    }

    // props such as min, max, step etc...

    render() {
        return (
            <div className="slider">
                <div className="slider-track"></div>
                <div className="slider-handle"></div>
            </div>
        )
    }
}

Slider.PropTypes = {
    value: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    disabled: React.PropTypes.boolean,
    onChange: React.PropTypes.func
};