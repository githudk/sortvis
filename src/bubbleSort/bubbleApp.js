import React, { Component } from 'react';
import './bubbleApp.css';
import ItemList from './itemList';


class BubbleApp extends Component {

  constructor(proprs) {
    super(proprs);
    var n = 20;
    var r = 500;
    var speed = 500;
    var arr = this.randomArr(n, r);
    this.state = {
      arr: arr,
      intArr : arr,
      n: n,
      r: r,
      timeID: 0,
      i: 0,
      j: 0,
      p: 1,
      interval: speed,
      sorting: 0
    }

  }
  randomArr(n, r) {
    var arr = [];
    for (var i = 0; i < n; i++) {
      var value = Math.floor(Math.random() * r);
      arr.push(value)
    }
    return arr;
  }
  random(){
    var arr = this.randomArr(this.state.n, this.state.r);
    this.setState({
      arr: arr,
      n: this.state.n,
      timeID: 0,
      i: 0,
      j: 0,
      p: 1,
      interval: this.state.interval,
      sorting: 0
    });
  }
  init() {
    this.stop();
   // var arr = this.randomArr(this.state.n, this.state.r);
    this.setState({
      arr: this.state.intArr,
      n: this.state.n,
      timeID: 0,
      i: 0,
      j: 0,
      p: 1,
      interval: this.state.interval,
      sorting: 0
    });
    
  }


  render() {
    return (
      <div className="App">
        <ItemList arr={this.state.arr} max={this.state.r} i={this.state.i} j={this.state.j} p={this.state.p} sorting={this.state.sorting}></ItemList>
        <button type="button" onClick={() => this.start()}>冒泡排序</button><span >&nbsp;&nbsp;&nbsp;</span>
        <button type="button" onClick={() => this.init()}>重置</button><span >&nbsp;&nbsp;&nbsp;</span>
        <button type="button" onClick={() => this.random()}>随机化</button><span >&nbsp;&nbsp;&nbsp;</span> <br/><br/>
        速度：<button type="button" onClick={() => this.speed(1)}>极速</button><span >&nbsp;&nbsp;&nbsp;</span>
        <button type="button" onClick={() => this.speed(100)}>中速</button><span >&nbsp;&nbsp;&nbsp;</span>
        <button type="button" onClick={() => this.speed(500)}>慢速</button><span >&nbsp;&nbsp;&nbsp;</span>
        数量：<button type="button" onClick={() => this.count(20)}>20</button><span >&nbsp;&nbsp;&nbsp;</span>
        <button type="button" onClick={() => this.count(50)}>50</button><span >&nbsp;&nbsp;&nbsp;</span>
        <button type="button" onClick={() => this.count(100)}>100</button><span >&nbsp;&nbsp;&nbsp;</span> <br/><br/>
      </div>
    );
  }
  count(n){
    this.stop();
    var arr = this.randomArr(n, this.state.r);
    this.setState({
      arr: arr,
      n: n,
      timeID: 0,
      i: 0,
      j: 0,
      p:1,
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
    this.bubbleSort();
  }

  bubbleSort() {
    var arr = this.state.arr;
    var len = arr.length;

    var i = this.state.i;
    var j = this.state.j;
    var p = this.state.p;

    if (i < (len - 1)) {
      if (j < (len - 1 - i)) {
        var temp = 0;
        if(p>j){
          if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            p=j;
          }
          j=j+1;
        }else{
          p=j+1
        }
        this.setState({
          arr: arr,
          j: j,
          p: p
        });
      } else {
        this.setState({
          i: i + 1,
          j: 0,
          p: 1
        });
      }
    } else {
      this.setState({
        i: 0,
        j: 0,
        p: 1
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

export default BubbleApp;
