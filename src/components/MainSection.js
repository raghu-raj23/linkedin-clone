import styled from "styled-components";
import PostModal from "./PostModal";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getArticlesAPI } from "../actions";
import ReactPlayer from "react-player";

const MainSection = (props) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    props.getArticle();
  }, []);

  const handleModal = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case true:
        setShowModal(false);
        break;
      case false:
        setShowModal(true);
        break;
      default:
        setShowModal(false);
        break;
    }
  };

  return (
    <>
      {props.articles.length === 0 ? (
        <p>No articles yet</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="profile" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button
                onClick={handleModal}
                disabled={props.loading ? true : false}>
                Start a post
              </button>
            </div>
            <div>
              <button>
                <img src="/images/photo-icon.svg" alt="" />
                <span>Photo</span>
              </button>
              <button>
                <img src="/images/video-icon.svg" alt="" />
                <span>Video</span>
              </button>

              <button>
                <img src="/images/event-icon.svg" alt="" />
                <span>Event</span>
              </button>

              <button>
                <img src="/images/write-icon.svg" alt="" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props.loading && <img src="./images/spinner.svg" alt="loading" />}

            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/ellipsis.svg" alt="" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImg>
                    <a>
                        {!article.sharedImg && article.video ? <ReactPlayer width = {"100%"} url = {article.video} /> : <img src={article.sharedImg} alt="" />}
                    </a>
                  </SharedImg>
                  <SocialCount>
                    <li>
                      <button>
                        <img src="/images/like.svg" alt="" />
                        <img src="/images/insight.svg" alt="" />
                        <img src="/images/clap.svg" alt="" />
                        <span> 75 </span>
                      </button>
                    </li>
                    <li>{article.comments} comments</li>
                  </SocialCount>
                  <SocialInteraction>
                    <button>
                      <img src="/images/like-action.svg" alt="" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="/images/comment-action.svg" alt="" />
                      <span>Comment</span>
                    </button>
                    <button>
                      <img src="/images/share-action.svg" alt="" />
                      <span>Share</span>
                    </button>
                    <button>
                      <img src="/images/send-action.svg" alt="" />
                      <span>Send</span>
                    </button>
                  </SocialInteraction>
                </Article>
              ))}
          </Content>
          <PostModal showModal={showModal} handleModal={handleModal} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  grid-area: MainSection;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: #fff;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: #fff;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 8px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #5e5e5e;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      border-radius: 50%;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 600;
          color: #5e5e5e;
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: #958b7b;
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 5px;
    background: transparent;
    border: none;
    outline: none;
    border-radius: 50%;
    &:hover {
      background-color: #ebebeb;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: #5e5e5e;
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #fff;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCount = styled.ul`
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #ebebeb;
  list-style: none;
  li {
    margin-right: 8px;
    font-size: 12px;
    button {
      display: flex;
      background: transparent;
      border: none;
      outline: none;
      @media (min-width: 768px) {
        span {
          margin-left: 5px;
        }
      }
    }
  }
`;

const SocialInteraction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  min-height: 48px;
  padding: 4px 8px;
  margin: 0;
  button {
    display: flex;
    background: transparent;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 4px;
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
    &:hover {
      background-color: #ebebeb;
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticle: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);


