import React from "react";
import { ProfileContainer, ProfileNavbar } from "./CustomStyledComponent";
import FeedComponent from "./FeedComponent";
import ProfileComponent from "./ProfileComponent";
export default class ProfileNav extends React.Component {
  constructor(props) {
    super(props);
    console.log("PROPSSSS: ", this.props);
  }
  render() {
    return (
      <ProfileContainer>
        <ProfileNavbar></ProfileNavbar>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "49px",
            marginLeft: "75px",
          }}
        >
          <ProfileComponent payload={this.props.location.state} />
          <FeedComponent payload={this.props.location.state} />
        </div>
      </ProfileContainer>
    );
  }
}
