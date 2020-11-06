import React from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Navbar,
  Logo,
  LinkButton,
  H4,
  CovidNavbar,
  CovidPara,
  LearnMore,
  CommunityPara,
  LinkedInStuff,
  Box,
  BoxPara,
} from "./CustomStyledComponent";

export default class LinkedInHome extends React.Component {
  render() {
    <Redirect to="/register" />;
    <Redirect to="/signin" />;
    return (
      <>
        <Navbar>
          <Logo src={`${process.env.PUBLIC_URL}/linkedInLogo.svg`} alt="logo" />
          <Link to="/signin">
            <LinkButton>Sign in</LinkButton>
          </Link>
          <Link to="/register">
            <H4>Join now</H4>
          </Link>
        </Navbar>
        <CovidNavbar>
          <CovidPara>
            Help and resources during the COVID-19 outbreak.
          </CovidPara>
          <Link to="/">
            <LearnMore>
              Learn more
              <img
                src={`${process.env.PUBLIC_URL}/right-arrow.svg`}
                alt="logo"
                height="12px"
              />
            </LearnMore>
          </Link>
        </CovidNavbar>
        <LinkedInStuff>
          <div>
            <CommunityPara>
              Welcome to your professional community
            </CommunityPara>
            <Box>
              <BoxPara>Search for a job</BoxPara>
              <img
                src={`${process.env.PUBLIC_URL}/lightWeight.svg`}
                alt="logo"
                style={{ height: "22px", marginTop: "5%", marginLeft: "85%" }}
              />
            </Box>
            <Box>
              <BoxPara>Fin a person you know</BoxPara>
              <img
                src={`${process.env.PUBLIC_URL}/lightWeight.svg`}
                alt="logo"
                style={{ height: "22px", marginTop: "5%", marginLeft: "85%" }}
              />
            </Box>
            <Box>
              <BoxPara>Learn a new skill</BoxPara>
              <img
                src={`${process.env.PUBLIC_URL}/lightWeight.svg`}
                alt="logo"
                style={{ height: "22px", marginTop: "5%", marginLeft: "85%" }}
              />
            </Box>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/findjob.svg`}
            width="650px"
            height="450px"
            alt="Job seeker"
          />
        </LinkedInStuff>
      </>
    );
  }
}
