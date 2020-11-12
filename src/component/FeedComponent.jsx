import React from "react";
import { connect } from "react-redux";
import {
  postsPostPayload,
  getPosts,
  postsLikesData,
} from "../redux/actionCreator";
import {
  PostContainer,
  CreatePostContainer,
  Posts,
} from "./CustomStyledComponent";
class FeedComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("PROPPPPSSSS: :", this.props);
    this.state = {
      author_id: 0,
      author_name: "",
      author_username: "",
      author_title: "post",
      body: "",
      commentMessage: "",
      isLike: false,
    };
  }

  handleOnChange = (e) => {
    const { name, authorId, userName } = this.props.payload;
    console.log(e.target.value);
    this.setState({
      author_id: authorId,
      author_name: name,
      author_username: userName,
      body: e.target.value,
    });
  };

  componentDidMount() {
    const { getAllPosts } = this.props;
    getAllPosts();
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      author_id,
      author_name,
      author_username,
      author_title,
      body,
    } = this.state;
    const { postsPayload } = this.props;
    postsPayload({
      author_id,
      author_name,
      author_username,
      author_title,
      body,
    });
  };

  handleOnClick = (id, postLike) => {
    console.log(this.props);

    const { postLikes, payload } = this.props;
    const { authorId, userName } = payload;
    postLikes({ id, postLike, authorId, userName });
  };

  // componentDidMount() {
  //   const { getAllPosts } = this.props;
  //   getAllPosts();
  // }

  render() {
    const { body } = this.state;
    const { profile } = this.props.payload;
    const { allPosts } = this.props;
    // getAllPosts() && getAllPosts();
    return (
      <>
        <div>
          <CreatePostContainer>
            <form style={{ display: "flex" }} onSubmit={this.handleOnSubmit}>
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
                value={body}
                onChange={this.handleOnChange}
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
            </form>
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
                  src={`${process.env.PUBLIC_URL}/video1.png`}
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
          {allPosts &&
            allPosts.map((item) => {
              return (
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
                      src={profile}
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
                        {this.props.payload.name}
                      </p>
                      <p style={{ margin: "0px" }}>
                        <small>Software Engineer</small>
                      </p>
                    </div>
                  </div>
                  <p
                    style={{ textAlign: "left", margin: "15px", width: "auto" }}
                  >
                    {item.body}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/like.png`}
                      height="20xp"
                      width="20xp"
                      alt="like"
                      style={{ marginTop: "10px" }}
                    />
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "GrayText",
                      }}
                      onClick={() => this.handleOnClick(item.id, item.likes)}
                    >
                      Like
                    </p>
                    <img
                      src={`${process.env.PUBLIC_URL}/comment.png`}
                      height="20xp"
                      width="20xp"
                      alt="comment"
                      style={{ marginTop: "12px" }}
                    />
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "GrayText",
                      }}
                    >
                      Comment
                    </p>
                  </div>
                </Posts>
              );
            })}
        </div>
      </>
    );
  }
}

const mapToStateProps = (state) => ({
  allPosts: state.app.allPosts,
});

const mapToDispatchProps = (dispatch) => ({
  postsPayload: (payload) => dispatch(postsPostPayload(payload)),
  getAllPosts: () => dispatch(getPosts()),
  postLikes: (payload) => dispatch(postsLikesData(payload)),
});

export default connect(mapToStateProps, mapToDispatchProps)(FeedComponent);
