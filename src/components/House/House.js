import React, { Component } from "react";
import "./House.css";
export class House extends Component {
  render() {
    const {
      name,
      address,
      city,
      state,
      zip,
      id,
      rent,
      mortgage,
      image_url
    } = this.props;
    return (
      <div>
        <div className="house-info">
          <img src={image_url} alt="a house" />
          <ul>
            <li> Property Name: {name}</li>
            <li>Address: {address} </li>
            <li> City: {city}</li>
            <li> State: {state} </li>
            <li> Zip: {zip}</li>
          </ul>
          <ul>
            <li> Monthly Mortgage: {mortgage}</li>
            <li> Desired Rent: {rent}</li>
          </ul>
          <span onClick={() => this.props.delete(id)}>✘</span>
        </div>
      </div>
    );
  }
}

export default House;
