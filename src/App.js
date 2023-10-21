import { Component } from "react";

export default class App extends Component {
  state = {
    list: ["1 1", "c22", "3aa"],
    option: null,
    value: "",
  };

  changeCurrentOption = () => {
    const index = Math.floor(Math.random() * this.state.list.length);
    this.setState({
      option: this.state.list[index],
    });
    console.log(index);
  };
  handleChangeInput = (e) => {
    const value = e.target.value;

    this.setState({
      value,
    });
  };
  handleClickPushArray = () => {
    const copyList = [...this.state.list];
    if (this.state.value === "") return;
    copyList.push(this.state.value);
    this.setState({
      value: "",
      list: copyList,
    });
    alert(`Dodano do tablicy ${copyList}`);
  };
  render() {
    console.log(this.state.option);
    return (
      <>
        <button onClick={this.changeCurrentOption}>Show</button>
        <br />
        <label>
          Dodaj
          <input
            value={this.state.value}
            onChange={this.handleChangeInput}
          ></input>
        </label>
        <button onClick={this.handleClickPushArray}>Add</button>
        {this.state.option ? <p>{this.state.option}</p> : null}
      </>
    );
  }
}
