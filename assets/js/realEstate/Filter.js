import React, { Component } from "react";
// import { throws } from "assert";

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      name: "elen"
    };
  }
  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <select
            name="city"
            className="filters city"
            onChange={this.props.change}
          >
            <option value="All">All</option>
            <option value="tbilisi">tbilisi</option>
            <option value="batumi">batumi</option>
            <option value="borjomi">borjomi</option>
            <option value="kutaisi">kutaisi</option>
          </select>
          <select
            name="homeType"
            className="filters houstype"
            onChange={this.props.change}
          >
            <option value="All">All homes</option>
            <option value="studio">studio</option>
            <option value="apartment">apartment</option>
            <option value="room">room</option>
            <option value="house">house</option>
          </select>
          <select
            name="bedrooms"
            className="filters bedrooms"
            onChange={this.props.change}
          >
            <option value="1">1 br</option>
            <option value="2">2 br</option>
            <option value="3">3 br</option>
            <option value="4">4 br</option>
            <option value="5">5 br</option>
          </select>
          <div className="filters price">
            <span className="title">price</span>
            <input
              type="text"
              name="min_price"
              className="min-price"
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <input
              type="text"
              name="max_price"
              className="max-price"
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>

          <div className="filters floor-space">
            <span className="title">floor space</span>
            <input
              type="text"
              name="min_floor_space"
              className="min-floor-space"
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}
            />
            <input
              type="text"
              name="max_floor_space"
              className="max-floor-space"
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}
            />
          </div>

          <div className="filters extras">
            <label htmlFor="extras">
              <span>elevators</span>
              <input
                name="elevator"
                value="elevator"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>swimming pool</span>
              <input
                name="swimming_pool"
                value="swimming_pool"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>finished basment</span>
              <input
                name="finished_basment"
                value="finished_basment"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>gym</span>
              <input
                name="gym"
                value="gym"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
          </div>
        </div>
      </section>
    );
  }
}
