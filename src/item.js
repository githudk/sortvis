import React, { Component } from 'react';
import './item.css';
import './color.css';

class Item extends Component{

    render() {
        var percent = (1-this.props.value / this.props.max)*100;
        var width = 1000/this.props.w;
        return (
            <div className="shape position" style={{ width: width+"px" }}>
                <div className={"fill backgroundColor-"+this.props.color}>
                    <div className="backgroundColor-aqua"  style={{ height: percent+"%" }}></div>
                </div>
            </div>
          );
    }

  
}

export default Item;