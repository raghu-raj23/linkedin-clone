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
                    <FeedItem>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#LinkedIn</span>
                            <button>Follow</button>
                        </div>
                    </FeedItem>
                    <FeedItem>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </FeedItem>
                </FeedList>
            </FollowCard>
        </Container>
    );
};


const Container = styled.div`
    grid-area: RightSection;
`;
const FollowCard = styled.div`
    background-color: #fff;
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    padding: 12px;
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

`;

const FeedItem = styled.li`

`;

const Avatar = styled.div`

`;

export default RightSection;