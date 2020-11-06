import React from "react";
import {
  PostContainer,
  CreatePostContainer,
  Posts,
} from "./CustomStyledComponent";
export default class FeedComponent extends React.Component {
  render() {
    return (
      <>
        <div>
          <CreatePostContainer>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                name="post"
                placeholder="Start post"
                style={{
                  width: "100%",
                  border: "none",
                  padding: "2px",
                  height: "35px",
                  background: "#ececec",
                  outline: "none",
                }}
              />
              <input
                type="submit"
                value="Post"
                style={{
                  border: "none",
                  outline: "none",
                  fontWeight: "bold",
                  color: "#1B73B1",
                }}
              />
            </div>
            <hr
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                width: "100%",
              }}
            ></hr>
            <div
              style={{ display: "flex", gap: "60px", justifyContent: "center" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: "GrayText",
                  fontSize: "14px",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/photo.png`}
                  height="20px"
                  width="20px"
                  alt="photo"
                  style={{ marginTop: "12px" }}
                />
                <p>Photo</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: "GrayText",
                  fontSize: "14px",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/video.png`}
                  height="20px"
                  width="20px"
                  alt="photo"
                  style={{ marginTop: "12px" }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    color: "GrayText",
                    fontSize: "14px",
                  }}
                >
                  Video
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: "GrayText",
                  fontSize: "14px",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/event.png`}
                  height="20px"
                  width="20px"
                  alt="photo"
                  style={{ marginTop: "12px" }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    color: "GrayText",
                    fontSize: "14px",
                  }}
                >
                  Event
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: "GrayText",
                  fontSize: "14px",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/article.png`}
                  height="20px"
                  width="20px"
                  alt="photo"
                  style={{ marginTop: "12px" }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    color: "GrayText",
                    fontSize: "14px",
                  }}
                >
                  Write article
                </p>
              </div>
            </div>
          </CreatePostContainer>
          <hr
            style={{ marginBottom: "10px", marginTop: "10px", width: "554px" }}
          ></hr>
          <Posts>
            <div
              style={{
                display: "flex",
                gap: "4px",
                justifyContent: "left",
                margin: "15px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/article.png`}
                alt="profile"
                style={{
                  height: "35px",
                  width: "35px",
                  border: "1px solid grey",
                  borderRadius: "50%",
                }}
              />
              <div>
                <p
                  style={{
                    margin: "0px",
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Amit Singh
                </p>
                <p style={{ margin: "0px" }}>
                  <small>Software Engineer</small>
                </p>
              </div>
            </div>
            <p style={{ textAlign: "left", margin: "15px", width: "auto" }}>
              Feed news
            </p>
          </Posts>
        </div>
      </>
    );
  }
}
