import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "elen"
    };
    this.loopListings = this.loopListings.bind(this);
  }
  loopListings() {
    let { listingsData } = this.props;

    if (listingsData == undefined || listingsData.length == 0) {
      return "sorry your filter did not match any listing";
    }

    return listingsData.map((listing, index) => {
      return (
        <div className="listing" key={index}>
          <div
            className="listing-img"
            style={{
              background: `url("${listing.image}") no-repeat center center`
            }}
          >
            <span className="address">{listing.address}</span>
            <div className="details">
              <div className="col-3">
                <div
                  className="user-img"
                  style={{
                    background: `url("${
                      listing.userImage
                    }") no-repeat center center`
                  }}
                />
              </div>
              <div className="col-9">
                <div className="user-details">
                  <span className="user-name">{listing.userName}</span>
                  <span className="post-data">{listing.postData}</span>
                </div>
                <div className="listing-ditails">
                  <div className="floor-space">
                    <span>floorSpace: {listing.floorSpace} </span>
                    <span> ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed" aria-hidden="true" />
                    <span>{listing.bedrooms}</span>
                  </div>
                </div>
                <div className="view-btn">view listngs</div>
              </div>
            </div>
          </div>

          <div className="bottom-info">
            <span className="price">${listing.price}/ month</span>
            <span className="location">
              <i className="fa fa-map-marker" aria-hidden="true">
                {listing.city}, {listing.state}
              </i>
            </span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section id="listings">
        <section className="search-part">
          <section className="search-area">
            <input type="text" name="search" onChange={this.props.change} />
          </section>
          <section className="sortby-area">
            <div className="results">360 results found</div>
            <div className="sort-options">
              <select
                name="sortby"
                className="sortby"
                onChange={this.props.change}
              >
                <option value="price-dsc"> lowest Price</option>
                <option value="price-asc"> highest Price</option>
              </select>
              <div className="view">
                <i className="fa fa-th-list" aria-hidden="true" />

                <i className="fa fa-th" aria-hidden="true" />
              </div>
            </div>
          </section>
        </section>
        <section className="listings-results">{this.loopListings()}</section>
        <section id="pagination">
          <ul className="pages">
            <li>prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>next</li>
          </ul>
        </section>
      </section>
    );
  }
}
