import React from "react";
import { ProfileStuff, Banner } from "./CustomStyledComponent";
export default class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("PROFILE PROPS: ", this.props.payload);
  }
  render() {
    const { profile } = this.props.payload;
    return (
      <>
        <ProfileStuff>
          <img
            src={profile}
            alt="profile"
            style={{
              borderRadius: "50%",
              height: "70px",
              width: "70px",
              marginTop: "30px",
              border: "2px solid white",
            }}
          />
          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                margin: "0px",
              }}
            >
              <u>{this.props.payload.name}</u>
            </p>
            <p style={{ color: "grey", fontSize: "14px", margin: "0px" }}>
              <small>Software Engineer</small>
            </p>
          </div>
          <hr style={{ width: "100%" }}></hr>
          <p
            style={{
              textAlign: "left",
              fontSize: "12px",
              fontWeight: "bold",
              marginLeft: "10px",
              color: "GrayText",
            }}
          >
            Who viewed your profile
          </p>
          <p
            style={{
              textAlign: "left",
              fontSize: "12px",
              fontWeight: "bold",
              marginLeft: "10px",
              color: "GrayText",
            }}
          >
            Views of your post
          </p>
          <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
            <p
              style={{
                color: "GrayText",
                textAlign: "left",
                margin: "0px",
                fontSize: "14px",
              }}
            >
              <small>Access exclusive tools & insights</small>
            </p>
            <p
              style={{
                fontWeight: "bold",
                textAlign: "left",
                margin: "0px",
                fontSize: "12px",
              }}
            >
              Retry premium Free
            </p>
          </div>
          <hr style={{ width: "100%" }}></hr>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              textAlign: "left",
              marginLeft: "10px",
            }}
          >
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/865/865159.svg"
              alt="save"
              height="12px"
              width="12px"
              style={{ marginTop: "4px", marginRight: "4px" }}
            />
            <u>My items</u>
          </p>
        </ProfileStuff>
      </>
    );
  }
}
