import React, { Component } from "react";
import "../App.css";
import Tip from "./Tip";
import styled from "styled-components";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      billValue: null,
      selectValue: " -- Choose an Option -- ",
      numberOfPeople: null,
      tips: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const copyValues = { ...this.state };
    const { billValue, selectValue, numberOfPeople, tips } = copyValues;
    if (!billValue || !numberOfPeople || !selectValue) {
      alert("Please Enter Values");
      this.setState({ tips: null });
    }
    if (billValue < 0 || numberOfPeople < 0) {
      alert("Enter Positive Values");
    }
    const tipFormula = ((billValue / 100) * selectValue) / numberOfPeople;
    this.setState({ tips: tipFormula.toFixed(2) });
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  render() {
    const MainTitle = styled.p`
      background-color: #1f030c;
      color: white;
      width: 100%;
      text-align: center;
      margin-top: 0;
      border-top-left-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    `;
    const { billValue, selectValue, numberOfPeople, tips } = this.state;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <MainTitle>TIP CALCULATOR</MainTitle>
        <label htmlFor="bill">How much was your bill?</label>
        <div>
          $
          <input
            onChange={this.handleChange}
            type="text"
            name="billValue"
            placeholder="Bill Amount"
            value={billValue}
          />
        </div>
        <label htmlFor="service">How was your service?</label>
        <div>
          <select
            onChange={this.handleChange}
            value={selectValue}
            name="selectValue"
          >
            <option value=" -- Choose an Option --">
              -- Choose an Option --
            </option>
            <option value="30">30% - Outstanding</option>
            <option value="20">20% - Good</option>
            <option value="15">15% - It was OK</option>
            <option value="10">10% - Bad</option>
            <option value="5">5% - Terrible</option>
          </select>
        </div>
        <label htmlFor="number-people">
          How many people are sharing the bill?
        </label>
        <div>
          <input
            onChange={this.handleChange}
            name="numberOfPeople"
            id="numberOfPeople"
            type="number"
            placeholder="Number of People"
            value={numberOfPeople}
          />
          people
        </div>

        <input type="submit" value="CALCULATE!" id="submit" />
        <Tip tips={tips} />
      </form>
    );
  }
}

export default Form;
