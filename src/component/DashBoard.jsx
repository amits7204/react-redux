import React from "react";
import { connect } from "react-redux";
import {
  getCountryObj,
  postCityObj,
  getCityObj,
  getCountryList,
  deleteCity,
} from "../redux/actionCreator";
import {
  CONTAINER,
  FORMDIV,
  CUSTOMINPUT,
  ADDBUTTON,
  SELECT,
  CODECONTAINER,
  PARA,
  PARA1,
  CITYPARA,
  DELETEBUTTON,
  EDITBUTTON,
} from "./CustomStyledComponent";
// import { getCountryList } from "../redux/countryredux/countryCreator";
import axios from "axios";
import { Redirect } from "react-router-dom";
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
      city_id: 0,
      tebularList: ["City", "Population"],
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
    const { countryList, cityList } = this.props;
    countryList();
    cityList();
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
    const { cityObj } = this.props;
    const { selectID, cityName, population } = this.state;
    cityObj({ selectID, cityName, population });
  };

  handleOnSubmit = () => {
    const { getCountry } = this.props;
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
    const { country, city, isError, deleteCityId } = this.props;
    console.log("City LIST: ", city);
    const { list, isAccess, cityName, population, cname } = this.state;
    console.log("COUNTRY LIST: ", country);

    return (
      <CONTAINER>
        <FORMDIV>
          <CUSTOMINPUT
            type="text"
            placeholder="enter new country"
            name="cname"
            value={cname}
            onChange={this.handleOnChange}
          />
          <br />
          <br />
          <ADDBUTTON onClick={this.handleOnSubmit}>ADD</ADDBUTTON>
          <br />
          <br />
          <SELECT onChange={this.selectChange} value={this.state.selectValue}>
            <option value="Select">Select Country</option>
            {country &&
              country.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </SELECT>

          {this.state.selectID !== 0 ? (
            <div>
              <CODECONTAINER>
                <PARA>Country Code: </PARA>
                <PARA1>{this.state.selectID}</PARA1>
              </CODECONTAINER>
              <form onSubmit={this.handleAddbutton}>
                <CUSTOMINPUT
                  name="cityName"
                  placeholder="enter city name"
                  type="text"
                  value={cityName}
                  onChange={this.handleCityname}
                />
                <br />
                <br />
                <CUSTOMINPUT
                  name="population"
                  placeholder="enter population"
                  type="text"
                  value={population}
                  onChange={this.handleCityname}
                />
                <br />
                <br />
                <ADDBUTTON>ADD</ADDBUTTON>
              </form>
            </div>
          ) : null}
        </FORMDIV>
        {/* <FORMDIV> */}
        {this.state.selectID !== 0 ? (
          <FORMDIV>
            {city &&
              city.map((item) => {
                console.log("CITY ITEM: ", item);
                return (
                  <CONTAINER>
                    <CITYPARA>{item.city_name}</CITYPARA>
                    <CITYPARA>{item.population}</CITYPARA>
                    <DELETEBUTTON onClick={() => deleteCityId(item.id)}>
                      DELETE
                    </DELETEBUTTON>
                    <EDITBUTTON>EDIT</EDITBUTTON>
                  </CONTAINER>
                );
              })}
          </FORMDIV>
        ) : null}
        {/* </FORMDIV> */}
      </CONTAINER>
    );
  }
}

const mapToStateProps = (state) => ({
  // name: state.app.name,
  country: state.app.countryList,
  city: state.app.city,
  isError: state.app.isError,
});

const mapToDispatchProps = (dispatch) => ({
  getCountry: (payload) => dispatch(getCountryObj(payload)),
  // countryList: () => dispatch(getCountryList()),
  cityObj: (payload) => dispatch(postCityObj(payload)),
  cityList: () => dispatch(getCityObj()),
  countryList: () => dispatch(getCountryList()),
  deleteCityId: (payload) => dispatch(deleteCity(payload)),
});
export default connect(mapToStateProps, mapToDispatchProps)(DashBoard);
