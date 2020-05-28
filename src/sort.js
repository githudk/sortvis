import React, { Component } from 'react';
import './sort.css';
import './color.css';
import Item from './item';


class Sort extends Component {

    itemList(arr){

        var itemList = [];
        for(var i = 0; i < arr.length; i++){
            var color = "black";
            if(i >= arr.length-this.props.i){
                color = "blue";
            }
            if(i===this.props.j){
                color = "yellow";
            }
            if(this.props.i===this.props.j&&this.props.j===0){
                color = "black";
            }
            var item = (
                <Item numb={i} value={arr[i]} max={this.props.max} color={color} w={this.props.arr.length}></Item>
            );
            itemList.push(item);
        }
        return itemList;
    }

    render() {
        //var arr = [53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35];
        return (
            <div className="sort backgroundColor-aqua">
                {this.itemList(this.props.arr)}
            </div>
        );
    }
}

export default Sort;