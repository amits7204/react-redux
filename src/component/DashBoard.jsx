import React from "react";
import { connect } from "react-redux";
import {
  getCountryObj,
  postCityObj,
  getCityObj,
  getCountryList,
} from "../redux/actionCreator";
// import { getCountryList } from "../redux/countryredux/countryCreator";
import axios from "axios";
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cname: "",
      list: {},
      isAccess: false,
      selectValue: "select",
      selectID: 0,
      cityName: "",
      population: "",
      cityList: [],
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // getCountryList = () => {
  //   console.log("PAYLOAD; ");
  // };

  componentDidMount() {
    const { countryList } = this.props;
    countryList({});
  }

  handleCityname = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddbutton = (e) => {
    e.preventDefault();
    console.log("ADD BUTTON:");
    const { cityObj, city, cityList } = this.props;
    const { selectID, cityName, population } = this.state;
    cityObj({ selectID, cityName, population });
    cityList({});
    console.log("CITTTYY: ", this.props);
    axios.get("http://localhost:3000/city").then((res) =>
      this.setState({
        cityList: res.data,
      })
    );
  };

  handleOnSubmit = () => {
    const { getCountry, countryList } = this.props;
    const { cname } = this.state;
    getCountry({ cname });

    console.log("CALLED: ");
  };

  selectChange = (e) => {
    console.log("ID: ", e.target);
    this.setState({
      selectID: e.target.value,
      selectValue: e.target.name,
    });
  };
  render() {
    const { country } = this.props;
    // getValue;
    console.log("COUNTRY LIST: ", country && country);
    const { cname } = this.state;

    const { list, isAccess, cityName, population, cityList } = this.state;
    console.log("City LIST: ", cityList.length);
    if (country.length > 0) {
      console.log("COUNTRY LIST: ", country);
    } else {
      return <span>Loading...</span>;
    }

    // if (cityList.length > 0) {
    //   console.log("city LIST: ", cityList && cityList);
    // } else {
    //   return <span>Loading...</span>;
    // }

    return (
      <>
        <input
          type="text"
          placeholder="enter new country"
          name="cname"
          value={cname}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleOnSubmit}>ADD</button>
        <select onChange={this.selectChange} value={this.state.selectValue}>
          {country.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        {this.state.selectID !== 0 ? (
          <div>
            <p>{this.state.selectID}</p>

            <form onSubmit={this.handleAddbutton}>
              <input
                name="cityName"
                placeholder="enter city name"
                type="text"
                value={cityName}
                onChange={this.handleCityname}
              />
              <input
                name="population"
                placeholder="enter population"
                type="text"
                value={population}
                onChange={this.handleCityname}
              />
              <input value="ADD" type="submit" />
            </form>
            {cityList.length > 0 ? (
              cityList.map((item) => {
                return (
                  <div>
                    <p>{item.city_name}</p>
                    <button>DELETE</button>
                  </div>
                );
              })
            ) : (
              <p>city name</p>
            )}
          </div>
        ) : null}
      </>
    );
  }
}

const mapToStateProps = (state) => ({
  // name: state.app.name,
  country: state.app.country,
  city: state.app.city,
  // isAuth: state.app.isAuth,
});

const mapToDispatchProps = (dispatch) => ({
  getCountry: (payload) => dispatch(getCountryObj(payload)),
  // countryList: () => dispatch(getCountryList()),
  cityObj: (payload) => dispatch(postCityObj(payload)),
  cityList: () => dispatch(getCityObj()),
  countryList: () => dispatch(getCountryList()),
});
export default connect(mapToStateProps, mapToDispatchProps)(DashBoard);
