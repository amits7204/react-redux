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
  Container,
  FormDiv,
  CustomInput,
  AddButton,
  Select,
  CodeContainer,
  Para,
  Para1,
  CityPara,
  DeleteButton,
  EditButton,
} from "./CustomStyledComponent";
import { Link, Redirect } from "react-router-dom";
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cname: "",
      list: {},
      selectValue: "",
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
    const { selectValue, cityName, population } = this.state;
    cityObj({ selectValue, cityName, population });
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
      selectValue: e.target.value,
    });
  };

  render() {
    const { country, city, isError, deleteCityId } = this.props;
    console.log("City LIST: ", city);
    const { cityName, population, cname } = this.state;
    console.log("COUNTRY LIST: ", country);
    console.log("SELECT VALUE: ", this.state.selectValue);
    if (isError) {
      console.log("ERRRROOORRR: ", isError);
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <FormDiv>
          <CustomInput
            type="text"
            placeholder="enter new country"
            name="cname"
            value={cname}
            onChange={this.handleOnChange}
          />
          <br />
          <br />
          <AddButton onClick={this.handleOnSubmit}>ADD</AddButton>
          <br />
          <br />
          <Select onChange={this.selectChange}>
            <option value="Select">Select Country</option>
            {country &&
              country.map((item) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
          </Select>

          <div>
            <CodeContainer>
              <Para>Country Code: </Para>
              <Para1>{this.state.selectValue}</Para1>
            </CodeContainer>
            <form onSubmit={this.handleAddbutton}>
              <CustomInput
                name="cityName"
                placeholder="enter city name"
                type="text"
                value={cityName}
                onChange={this.handleCityname}
              />
              <br />
              <br />
              <CustomInput
                name="population"
                placeholder="enter population"
                type="text"
                value={population}
                onChange={this.handleCityname}
              />
              <br />
              <br />
              <AddButton>ADD</AddButton>
            </form>
          </div>
        </FormDiv>
        {/* <FORMDIV> */}
        <FormDiv>
          {city &&
            city.map((item) => {
              console.log("CITY ITEM: ", item);
              return (
                <Container>
                  <CityPara>{item.country_name}</CityPara>
                  <CityPara>{item.city_name}</CityPara>
                  <CityPara>{item.population}</CityPara>
                  <DeleteButton onClick={() => deleteCityId(item.id)}>
                    DELETE
                  </DeleteButton>
                  <Link
                    to={{
                      pathname: `/dashboard/edit/${item.id}`,
                      state: { population: item.population },
                    }}
                  >
                    <EditButton>EDIT</EditButton>
                  </Link>
                </Container>
              );
            })}
        </FormDiv>
        {/* </FORMDIV> */}
      </Container>
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
