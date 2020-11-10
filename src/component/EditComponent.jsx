import React from "react";
import { connect } from "react-redux";
import {
  LoginContainer,
  CustomInput,
  AddButton,
} from "./CustomStyledComponent";
import { updatePopulation } from "../redux/actionCreator";
class EditComponent extends React.Component {
  constructor(props) {
    console.log("PROPS: ", props);
    super(props);
    this.state = {
      population: "",
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit: ", this.props);
    const { update } = this.props;
    const id = this.props.match.params.id;
    const { population } = this.state;
    update({ id, population });
    this.props.history.goBack();
  };

  render() {
    const { population } = this.state;
    console.log("PROPS RENDER :", this.props);

    return (
      <LoginContainer>
        <div
          style={{
            height: "20px",
            width: "20px",
            margin: "auto",
            marginBottom: "8px",
            border: "1px solid #b22222",
            borderRadius: "50%",
          }}
        >
          {this.props.match.params.id}
        </div>
        <CustomInput
          placeholder="Enter population"
          type="text"
          name="population"
          value={population}
          onChange={this.handleOnChange}
        />
        <br />
        <br />
        <AddButton style={{ width: "300px" }} onClick={this.handleOnSubmit}>
          UPDATE
        </AddButton>
      </LoginContainer>
    );
  }
}
const mapToStateProps = (state) => ({
  // name: state.app.name,
  isAuth: state.app.isAuth,
});
const mapToDispatchProps = (dispatch) => ({
  update: (payload) => dispatch(updatePopulation(payload)),
});
export default connect(mapToStateProps, mapToDispatchProps)(EditComponent);
