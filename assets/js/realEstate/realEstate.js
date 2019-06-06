import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Filter from "./Filter";
import Listings from "./Listings";
import listingsData from "./data/listingsData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "elen",
      listingsData,
      city: "All",
      homeType: "All homes",
      bedrooms: 1,
      min_price: 0,
      max_price: 1000,
      min_floor_space: 50,
      max_floor_space: 1000,
      elevator: false,
      swimming_pool: false,
      finished_basment: false,
      gym: false,
      filterData: listingsData,
      sortby: "price-dsc",
      view: "long",
      search: ""
    };
    this.change = this.change.bind(this);
    this.filterData = this.filterData.bind(this);
  }
  componentWillMount() {
    let listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price;
    });
    this.setState({
      listingsData
    });
  }

  change(event) {
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
        this.filterData();
      }
    );
  }

  filterData() {
    let newData = this.state.listingsData.filter(item => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorSpace >= this.state.min_floor_space &&
        item.floorSpace <= this.state.max_floor_space &&
        item.bedrooms >= this.state.bedrooms
      );
    });

    if (this.state.city != "All") {
      newData = newData.filter(item => {
        return item.city.toLowerCase().match(this.state.city.toLowerCase());
      });
    }

    // if (this.state.homeType != "All") {
    //   newData = newData.filter(item => {
    //     return item.homeType
    //       .toLowerCase()
    //       .match(this.state.homeType.toLowerCase());
    //   });
    // }

    if (this.state.sortby == "price-dsc") {
      newData = newData.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (this.state.sortby == "price-asc") {
      newData = newData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (this.state.search != "") {
      newData = newData.filter(item => {
        let city = item.city.toLowerCase();
        let searchText = this.state.search.toLowerCase();
        let n = city.match(searchText);
        if (n != null) {
          return true;
        }
      });
    }

    this.setState({
      filterData: newData
    });
  }
  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings
            listingsData={this.state.filterData}
            globalState={this.state}
          />
        </section>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<App />, app);
