import React, {Component} from "react";
import store from "../store/";

export default class ReduxPage extends Component {
  componentDidMount() {
    // store发生变化之后，执行subscribe的监听函数
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    // 取消订阅
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
  add = () => {
    // 修改状态
    store.dispatch({type: "ADD"});
  };

  asyAdd = () => {
    // 模拟下异步数据请求
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        console.log("getState", getState()); //sy-log
        dispatch({type: "ADD"});
      }, 1000);
    });
  };

  add2 = () => {
    store.dispatch({type: "ADD2", payload: 100})
  }

  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState().count}</p>
        <p>{store.getState().count2.num}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.asyAdd}>asy add</button>
        <button onClick={this.add2}>add num</button>
      </div>
    );
  }
}
