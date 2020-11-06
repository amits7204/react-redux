import React from "react";
import { ProfileContainer, ProfileNavbar } from "./CustomStyledComponent";
import FeedComponent from "./FeedComponent";
import ProfileComponent from "./ProfileComponent";
export default class ProfileNav extends React.Component {
  constructor(props) {
    super(props);
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
          <ProfileComponent />
          <FeedComponent />
        </div>
      </ProfileContainer>
    );
  }
}
