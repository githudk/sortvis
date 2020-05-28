import React, { Component } from 'react';
import './item.css';
import './insertColor.css';

class Item extends Component{

    render() {
        var percent = (1-this.props.value / this.props.max)*100;
        var width = 1000/this.props.w;
        return (
            <div className="shape position" style={{ width: width+"px" }}>
                <div className={"fill insertColor"+this.props.color}>
                    <div className="insertColor_background"  style={{ height: percent+"%" }}></div>
                </div>
            </div>
          );
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.value !== this.props.value ||
        nextProps.color !== this.props.color;
    }

  
}

export default Item;