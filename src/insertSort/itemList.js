import React, { Component } from 'react';
import './itemList.css';
import './insertColor.css';
import Item from './item';


class ItemList extends Component {

    itemList(arr){

        var itemList = [];
        for(var i = 0; i < arr.length; i++){
            var value = arr[i];
            var color = "_arr";
            if(this.props.fz===0){
                if(i <= this.props.i){
                    color = "_complete";
                }
                if(this.props.index_insert===i){
                    color = "_arr";
                }
                if(i === this.props.j  &&this.props.sorting===1){
                    value = value;
                    color = "_index";
                }
                if(this.props.sorting===0){
                    color = "_arr";
                }
            }else if(this.props.fz===1){
                color = "_background";
                // if(i <= this.props.i){
                //     color = "_complete";
                // }
                if(i===this.props.j&&this.props.sorting===1){
                    color = "_arr";
                    value = this.props.value;
                }
                // if(this.props.sorting===0){
                //     color = "_arr";
                // }
            }
            
            var item = (
                <Item numb={i} value={value} max={this.props.max} color={color} w={this.props.arr.length}></Item>
            );
            itemList.push(item);
        }
        return itemList;
    }

    render() {
        //var arr = [53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35];
        return (
            <div className="insertSortList insertColor_background">
                {this.itemList(this.props.arr)}
            </div>
        );
    }
}

export default ItemList;