import React, { Component } from 'react';
import './itemList.css';
import './bubbleColor.css';
import Item from './item';


class ItemList extends Component {

    itemList(arr){

        var itemList = [];
        for(var i = 0; i < arr.length; i++){
            var color = "_arr";
            if(i >= arr.length-this.props.i){
                color = "_complete";
            }
            
            if(i===this.props.p){
                color = "_indexp";
            }
            if(i===this.props.j){
                color = "_index";
            }
            if(this.props.sorting===0){
                color = "_arr";
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
            <div className="bubbleSortList bubbleColor_background">
                {this.itemList(this.props.arr)}
            </div>
        );
    }
}

export default ItemList;