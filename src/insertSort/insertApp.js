import React, { Component } from 'react';
import './insertApp.css';
import ItemList from './itemList';


class InsertApp extends Component {

  constructor(proprs) {
    super(proprs);
    var n = 20;
    var r = 1000;
    var speed = 1000;
    var arr = this.initArr(n, r);
    this.state = {                       
      arr: arr,
      n: n,
      r: r,
      timeID: 0,
      i: 1,
      j: 1,
      index: 1,
      value: arr[1],
      interval: speed,
      sorting: 0
    }

  }
  initArr(n, r) {
    var arr = [];
    for (var i = 0; i < n; i++) {
      var value = Math.floor(Math.random() * r);
      arr.push(value)
    }
    return arr;
  }
  init() {
    this.stop();
    var arr = this.initArr(this.state.n, this.state.r);
    this.setState({
      arr: arr,
      n: this.state.n,
      timeID: 0,
      i: 1,
      j: 1,
      index: 1,
      index_insert:-1,
      value: arr[1],
      interval: this.state.interval,
      sorting: 0
    });
  }
  

  render() {
    //<ItemList arr={this.state.arr} value={this.state.value} max={this.state.r} i={this.state.i} j={this.state.j} sorting={this.state.sorting} fz={1}></ItemList>
    return (
      <div className="App">
        <ItemList arr={this.state.arr} index_insert={this.state.index_insert} max={this.state.r} i={this.state.i} j={this.state.j} sorting={this.state.sorting} fz={0}></ItemList>        <button type="button" onClick={() => this.start()}>插入排序</button><span >&nbsp;&nbsp;&nbsp;</span>
        <button type="button" onClick={() => this.init()}>随机化</button><span >&nbsp;&nbsp;&nbsp;</span> <br/><br/>
        速度：<button type="button" onClick={() => this.speed(1)}>极速</button><span >&nbsp;&nbsp;&nbsp;</span>
        <button type="button" onClick={() => this.speed(200)}>中速</button><span >&nbsp;&nbsp;&nbsp;</span>
        <button type="button" onClick={() => this.speed(1000)}>慢速</button><span >&nbsp;&nbsp;&nbsp;</span>
        数量：<button type="button" onClick={() => this.count(20)}>20</button><span >&nbsp;&nbsp;&nbsp;</span>
        <button type="button" onClick={() => this.count(50)}>50</button><span >&nbsp;&nbsp;&nbsp;</span>
        <button type="button" onClick={() => this.count(100)}>100</button><span >&nbsp;&nbsp;&nbsp;</span> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      </div>
    );
  }
  count(n){
    this.stop();
    var arr = this.initArr(n, this.state.r);
    this.setState({
      arr: arr,
      n: n,
      timeID: 0,
      i: 0,
      j: 0,
      interval: this.state.interval,
      sorting: 0
    });
  }
  speed(speed) {
    if (this.state.sorting === 1) {
      this.stop();
      var timeID = setInterval(
        () => this.sort(),
        speed
      );
      this.setState({
        timeID: timeID,
        sorting: 1,
        interval: speed
      });
    }else{
      this.setState({
        interval: speed
      });
    }

  }
  sort() {
    this.insertSort2();
  }

  
  insertSort2() {
    var arr = this.state.arr;
    var len = arr.length;

    var i = this.state.i;
    var j = this.state.j;

    var index = this.state.index;
    var value = this.state.value;
    var index_insert = -1;
    if (i < len) {
      if (j > 0) {
        if(value < arr[j-1]) {
          arr[j] = arr[j-1];
          arr[j-1] = value;
          index = j-1;
          j = j-1;
        }else {
          arr[index] = value;
          index_insert = index;
          j=i+1;
          i=i+1;
          value = arr[i];
          index = i;
        }
        this.setState({
          arr: arr,
          i: i,
          j: j,
          index: index,
          index_insert: index_insert,
          value: value
        });
      } else {
        arr[0] = value;
        i = i+1;
        this.setState({
          i: i,
          j: i,
          index: i,
          value: arr[i],
          index_insert: 0,
        });
      }
    } else {
      this.setState({
        i: 1,
        j: 1,
        index: 1,
        value: arr[1]
      });
      this.stop();
    }
  }
  insertSort() {
    var arr = this.state.arr;
    var len = arr.length;

    var i = this.state.i;
    var j = this.state.j;

    if (i < len) {
      if (j > 0) {
        if(arr[j] < arr[j-1]) {
          var value = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = value;
          j = j-1;
        }else {
          j=i+1;
          i=i+1;
        }
        this.setState({
          arr: arr,
          i: i,
          j: j
        });
      } else {
        this.setState({
          i: i + 1,
          j: i + 1
        });
      }
    } else {
      this.setState({
        i: 1,
        j: 1
      });
      this.stop();
    }
  }

  // sleep(delay) {
  //   var start = (new Date()).getTime();
  //   while ((new Date()).getTime() - start < delay) {
  //     continue;
  //   }
  // }
  /**
     * 开始
     */
  start() {
    var timeID = this.state.timeID;
    var sorting = this.state.sorting;
    if (timeID === 0 && sorting === 0) {
      timeID = setInterval(
        () => this.sort(),
        this.state.interval
      );
      this.setState({
        timeID: timeID,
        sorting: 1
      });
    }

  }
  /**
     * 暂停
     */
  stop() {
    var timeID = this.state.timeID;
    var sorting = this.state.sorting;
    if (timeID !== 0 && sorting === 1) {
      clearInterval(timeID);
      this.setState({
        timeID: 0,
        sorting: 0
      });
    }

  }
}

export default InsertApp;
