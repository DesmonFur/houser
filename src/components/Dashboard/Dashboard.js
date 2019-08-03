import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";
import './Dashboard.css'
export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
      console.log("Mounting");
    });
  }

  delete(id) {
    axios.delete(`/api/houses/${id}`).then(res => {
      this.setState({ houses: res.data });
    });
  }

  render() {
    const { houses } = this.state;

    return (
      <div>
        <div className="dash-header">
          <h1>Dashboard</h1>

          <Link to="/wizard/step1">
            <span>Add new property</span>
          </Link>
        </div>
        {houses.map(house => (
          <House
            key={house.id}
            id={house.id}
            name={house.name}
            address={house.address}
            city={house.city}
            state={house.state}
            zip={house.zip}
            image_url={house.image_url}
            mortgage={house.mortgage}
            rent={house.rent}
            delete={this.delete}
          />
        ))}
      </div>
    );
  }
}

export default Dashboard;
