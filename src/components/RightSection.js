import { TimelineOutlined } from "@material-ui/icons";
import styled from "styled-components";

const RightSection = props => {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>LinkedIn News</h2>
                    <img src="/images/feed-icon.svg" alt="" />
                </Title>
                <FeedList>
                    <li>
                        <span>&#9679;</span>
                        <a>
                            What is this and that
                            <p>23h ago &bull; 1000 readers</p>
                        </a>
                    </li>
                    <li>
                        <span>&#9679;</span>

                        <a>
                            What is this and that
                            <p>23h ago &bull; 1000 readers</p>
                        </a>
                    </li>
                    <li>
                        <span>&#9679;</span>

                        <a>
                            What is this and that
                            <p>23h ago &bull; 1000 readers</p>
                        </a>
                    </li>
                    <li>
                        <span>&#9679;</span>

                        <a>
                            What is this and that
                            <p>23h ago &bull; 1000 readers</p>
                        </a>
                    </li>
                    <div>
                        <span>Show more</span>
                    </div>
                </FeedList>
                <Recomendation>
                    View all recommendations
                    <img src="/images/right-icon.svg" alt="" />
                </Recomendation>
            </FollowCard>
            <BannerCard>
                <img src="/images/banner-1.jpg" alt="" />
            </BannerCard>
        </Container>
    );
};


const Container = styled.div`
    grid-area: RightSection;
`;
const FollowCard = styled.div`
    background-color: #fff;
    text-align: center;
    margin-bottom: 8px;
    overflow: hidden;
    position: relative;
    border: none;
    /* min-height: 100%; */
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    /* padding: 12px 12px 0; */
`;

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: #191919;
`;

const FeedList = styled.ul`
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 12px 12px 0;

    overflow: hidden;
    background-color: #fff;
    li{
        text-align: left;
        display: flex;
        padding: 10px 0;
        line-height: 1.33;
        position: relative;
        &>span{
            margin-right: 10px;
            color: #A3A3A3;
        }
        &:hover{
            background-color: #EBEBEB;
        }
        &>a{
            font-size: 14px;
            font-weight: 600;
            color: #191919;
            text-decoration: none;
            &>p{
                font-size: 12px;
                margin-top: 5px;
                color: #5E5E5E;
            }
        }
    }
    div{
        display: flex;
        align-items: center;
        text-align: left;
        margin: 10px 20px 0;
        &>span{
            color: #A3A3A3;
            font-weight: 600;
            font-size: 14px;
            text-decoration:none;
            padding: 5px;
            border-radius: 4px;
            &:hover{
                background-color: #EBEBEB;
            }
        }
    }
`;

const Recomendation = styled.a`
    color: #0a66c2;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 8px 12px;
`;
const BannerCard = styled(FollowCard)`

`;

export default RightSection;