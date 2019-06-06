webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { throws } from "assert";

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: "elen"
    };
    return _this;
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            "Filter"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "city",
              className: "filters city",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All"
            ),
            _react2.default.createElement(
              "option",
              { value: "tbilisi" },
              "tbilisi"
            ),
            _react2.default.createElement(
              "option",
              { value: "batumi" },
              "batumi"
            ),
            _react2.default.createElement(
              "option",
              { value: "borjomi" },
              "borjomi"
            ),
            _react2.default.createElement(
              "option",
              { value: "kutaisi" },
              "kutaisi"
            )
          ),
          _react2.default.createElement(
            "select",
            {
              name: "homeType",
              className: "filters houstype",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All homes"
            ),
            _react2.default.createElement(
              "option",
              { value: "studio" },
              "studio"
            ),
            _react2.default.createElement(
              "option",
              { value: "apartment" },
              "apartment"
            ),
            _react2.default.createElement(
              "option",
              { value: "room" },
              "room"
            ),
            _react2.default.createElement(
              "option",
              { value: "house" },
              "house"
            )
          ),
          _react2.default.createElement(
            "select",
            {
              name: "bedrooms",
              className: "filters bedrooms",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "1" },
              "1 br"
            ),
            _react2.default.createElement(
              "option",
              { value: "2" },
              "2 br"
            ),
            _react2.default.createElement(
              "option",
              { value: "3" },
              "3 br"
            ),
            _react2.default.createElement(
              "option",
              { value: "4" },
              "4 br"
            ),
            _react2.default.createElement(
              "option",
              { value: "5" },
              "5 br"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "price"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_price",
              className: "min-price",
              onChange: this.props.change,
              value: this.props.globalState.min_price
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_price",
              className: "max-price",
              onChange: this.props.change,
              value: this.props.globalState.max_price
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "floor space"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_floor_space",
              className: "min-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.min_floor_space
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_floor_space",
              className: "max-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.max_floor_space
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "elevators"
              ),
              _react2.default.createElement("input", {
                name: "elevator",
                value: "elevator",
                type: "checkbox",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "swimming pool"
              ),
              _react2.default.createElement("input", {
                name: "swimming_pool",
                value: "swimming_pool",
                type: "checkbox",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "finished basment"
              ),
              _react2.default.createElement("input", {
                name: "finished_basment",
                value: "finished_basment",
                type: "checkbox",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "gym"
              ),
              _react2.default.createElement("input", {
                name: "gym",
                value: "gym",
                type: "checkbox",
                onChange: this.props.change
              })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "elen"
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          _react2.default.createElement(
            "a",
            { href: "#" },
            "logo"
          )
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#listings" },
            "listings"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "about us"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "log in"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);
// ReactDOM.render(<Header />, app);


exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "elen"
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: "loopListings",
    value: function loopListings() {
      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "sorry your filter did not match any listing";
      }

      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          "div",
          { className: "listing", key: index },
          _react2.default.createElement(
            "div",
            {
              className: "listing-img",
              style: {
                background: "url(\"" + listing.image + "\") no-repeat center center"
              }
            },
            _react2.default.createElement(
              "span",
              { className: "address" },
              listing.address
            ),
            _react2.default.createElement(
              "div",
              { className: "details" },
              _react2.default.createElement(
                "div",
                { className: "col-3" },
                _react2.default.createElement("div", {
                  className: "user-img",
                  style: {
                    background: "url(\"" + listing.userImage + "\") no-repeat center center"
                  }
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "col-9" },
                _react2.default.createElement(
                  "div",
                  { className: "user-details" },
                  _react2.default.createElement(
                    "span",
                    { className: "user-name" },
                    listing.userName
                  ),
                  _react2.default.createElement(
                    "span",
                    { className: "post-data" },
                    listing.postData
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "listing-ditails" },
                  _react2.default.createElement(
                    "div",
                    { className: "floor-space" },
                    _react2.default.createElement(
                      "span",
                      null,
                      "floorSpace: ",
                      listing.floorSpace,
                      " "
                    ),
                    _react2.default.createElement(
                      "span",
                      null,
                      " ft\xB2"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "bedrooms" },
                    _react2.default.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                    _react2.default.createElement(
                      "span",
                      null,
                      listing.bedrooms
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "view-btn" },
                  "view listngs"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "bottom-info" },
            _react2.default.createElement(
              "span",
              { className: "price" },
              "$",
              listing.price,
              "/ month"
            ),
            _react2.default.createElement(
              "span",
              { className: "location" },
              _react2.default.createElement(
                "i",
                { className: "fa fa-map-marker", "aria-hidden": "true" },
                listing.city,
                ", ",
                listing.state
              )
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "listings" },
        _react2.default.createElement(
          "section",
          { className: "search-part" },
          _react2.default.createElement(
            "section",
            { className: "search-area" },
            _react2.default.createElement("input", { type: "text", name: "search", onChange: this.props.change })
          ),
          _react2.default.createElement(
            "section",
            { className: "sortby-area" },
            _react2.default.createElement(
              "div",
              { className: "results" },
              "360 results found"
            ),
            _react2.default.createElement(
              "div",
              { className: "sort-options" },
              _react2.default.createElement(
                "select",
                {
                  name: "sortby",
                  className: "sortby",
                  onChange: this.props.change
                },
                _react2.default.createElement(
                  "option",
                  { value: "price-dsc" },
                  " lowest Price"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "price-asc" },
                  " highest Price"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "view" },
                _react2.default.createElement("i", { className: "fa fa-th-list", "aria-hidden": "true" }),
                _react2.default.createElement("i", { className: "fa fa-th", "aria-hidden": "true" })
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "listings-results" },
          this.loopListings()
        ),
        _react2.default.createElement(
          "section",
          { id: "pagination" },
          _react2.default.createElement(
            "ul",
            { className: "pages" },
            _react2.default.createElement(
              "li",
              null,
              "prev"
            ),
            _react2.default.createElement(
              "li",
              { className: "active" },
              "1"
            ),
            _react2.default.createElement(
              "li",
              null,
              "2"
            ),
            _react2.default.createElement(
              "li",
              null,
              "3"
            ),
            _react2.default.createElement(
              "li",
              null,
              "4"
            ),
            _react2.default.createElement(
              "li",
              null,
              "5"
            ),
            _react2.default.createElement(
              "li",
              null,
              "next"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  userImage: "https://www.smartcompany.com.au/content/uploads/2015/09/Amanda%20Rose%20-%20SC%20200px.jpg",
  userName: "elene shavishvili",
  postData: "20 apryl 19",
  address: "paliashvili str. 20",
  city: "Tbilisi",
  country: "Georgia",
  bedrooms: 3,
  price: 1000,
  floorSpace: 200,
  extras: ["elevator", "gym"],
  homeType: "house",
  image: "https://q-ak.bstatic.com/images/hotel/max1024x768/914/91445783.jpg"
}, {
  userImage: "https://www.pioneernetwork.net/wp-content/uploads/2018/09/Margie-McLaughlin.png",
  userName: "nini gold",
  postData: "20 apryl 19",
  address: "era str. 20",
  city: "batumi",
  country: "Georgia",
  bedrooms: 1,
  price: 200,
  floorSpace: 100,
  extras: ["elevator", "gym"],
  homeType: "studio",
  image: "https://cdn.homedit.com/wp-content/uploads/2011/12/museum-residence-avenue.jpg"
}, {
  userImage: "https://static.fmgsuite.com/media/images/4895c399-d2b9-4f1a-af41-407f78d1cfa6.jpg",
  userName: "ana nikol",
  postData: "20 apryl 19",
  address: "paliashvili str. 20",
  city: "kutaisi",
  country: "Georgia",
  bedrooms: 2,
  price: 500,
  floorSpace: 100,
  extras: ["elevator", "gym"],
  homeType: "studio",
  image: "https://cdn.homedit.com/wp-content/uploads/2011/12/museum-residence-avenue1.jpg"
}, {
  userImage: "https://box13eng.com/wp-content/uploads/2018/03/john.jpg",
  userName: "george benson",
  postData: "20 apryl 19",
  address: "arakishvili str. 5",
  city: "Tbilisi",
  country: "Georgia",
  bedrooms: 5,
  price: 1000,
  floorSpace: 500,
  extras: ["elevator", "gym"],
  homeType: "apartment",
  image: "https://cdn.homedit.com/wp-content/uploads/2011/12/museum-residence-avenue3.jpg"
}, {
  userImage: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,f_auto,g_center,h_150,q_auto:good,w_150/v1/sl0/v1/AUTH_d0619b05-07fc-49f0-8249-da585ea45ce5/events/TJ%20Person%20Headshot%20Square_4dVnXqD.jpg",
  userName: "nick smith",
  postData: "20 apryl 19",
  address: "rustaveli str. 6",
  city: "batumi",
  country: "Georgia",
  bedrooms: 2,
  price: 200,
  floorSpace: 100,
  extras: ["elevator", "gym"],
  homeType: "apartment",
  image: "https://cdn.homedit.com/wp-content/uploads/2019/03/Madrid-living-room-decor-with-blue-curtains.jpg"
}, {
  userImage: "https://alternativebreaks.org/wp-content/uploads/2018/09/0.jpeg",
  userName: "daved conrad",
  postData: "20 apryl 19",
  address: "rustaveli str. 10",
  city: "borjomi",
  country: "Georgia",
  bedrooms: 2,
  price: 100,
  floorSpace: 100,
  extras: ["elevator", "gym"],
  homeType: "house",
  image: "https://cdn.homedit.com/wp-content/uploads/2019/03/Traditional-family-room-with-piano-and-classic-curtain-styles.jpg"
}, {
  userImage: "https://29331n247iqkrl2e0lcwz1yf-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/right-person-job-pablo-pauly.jpg",
  userName: "gio chalatashvili",
  postData: "20 apryl 19",
  address: "samgebro str. 7",
  city: "Tbilisi",
  country: "Georgia",
  bedrooms: 3,
  price: 1000,
  floorSpace: 250,
  extras: ["elevator", "gym"],
  homeType: "room",
  image: "https://cdn.homedit.com/wp-content/uploads/2019/03/Undercurrent-Architects-Living-room-Decor.jpg"
}, {
  userImage: "https://making-the-web.com/sites/default/files/clipart/157025/happy-person-picture-157025-4275865.jpg",
  userName: "nino mardaleishvili",
  postData: "20 apryl 19",
  address: "machabeli str. 7",
  city: "Tbilisi",
  country: "Georgia",
  bedrooms: 4,
  price: 800,
  floorSpace: 200,
  extras: ["elevator", "gym"],
  homeType: "room",
  image: "https://cdn.homedit.com/wp-content/uploads/2019/03/Grey-shade-bay-window-curtains.jpg"
}, {
  userImage: "https://eringatedental.com/wp-content/uploads/2018/04/testimonial-person-05.jpg",
  userName: "tako iioseliani",
  postData: "20 apryl 19",
  address: "makharadze str. 20",
  city: "batumi",
  country: "Georgia",
  bedrooms: 3,
  price: 1000,
  floorSpace: 200,
  extras: ["elevator", "gym"],
  homeType: "apartment",
  image: "https://cdn.homedit.com/wp-content/uploads/2019/03/Modern-living-room-with-chevron-floor-and-floor-to-ceiling-glass-windows.jpg"
}];

exports.default = listingsData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: "elen",
      listingsData: _listingsData2.default,
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
      filterData: _listingsData2.default,
      sortby: "price-dsc",
      view: "long",
      search: ""
    };
    _this.change = _this.change.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });
      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: "change",
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filterData();
      });
    }
  }, {
    key: "filterData",
    value: function filterData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.bedrooms >= _this3.state.bedrooms;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city.toLowerCase().match(_this3.state.city.toLowerCase());
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
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.sortby == "price-asc") {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != "") {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);
          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filterData: newData
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          "section",
          { id: "content-area" },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state }),
          _react2.default.createElement(_Listings2.default, {
            listingsData: this.state.filterData,
            globalState: this.state
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);