import styled from "styled-components";
import { connect } from 'react-redux';

const LeftSection = props => {
    return (
        <Container>
            <InfoCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo />
                        <Link>Welcome, {props.user ? props.user.displayName : "there"}</Link>
                    </a>
                    <a>
                        <AddPhototText>
                            Add a photo
                        </AddPhototText>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src='/images/widget-icon.svg' alt='' />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src='/images/item-icon.svg' alt='' />
                        My Items
                    </span>
                </Item>
            </InfoCard>
            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>Events
                        <img src='/images/plus-icon.svg' alt='' />
                    </span>
                </a>
                <a>
                    <span>Followed Hashtags</span>
                </a>
                <span>
                    <span>Discover more</span>
                </span>
            </CommunityCard>
        </Container>
    );
};


const Container = styled.div`
    grid-area: LeftSection;
`;

const InfoCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 4px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(0,0,0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
`;

const CardBackground = styled.div`
    background: url('/images/card-bg.svg');
    background-position: center;
    background-size: cover;
    height: 54px;
    margin: -12px -12px 0;
`;

const Photo = styled.div`
    box-shadow: none;
    background-image: url('/images/photo.svg');
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: #fff;
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
    border: 7px solid #fff;
    margin: -30px auto 12px;
    border-radius: 50%;
`;

const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: #191919;
    font-weight: 600;
`;

const AddPhototText = styled.div`
    color: #666666;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0,0,0, 0.15);
    padding: 12px 0;
    &>a{
        text-decoration: none;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;

        &:hover{
            background-color: #EBEBEB;
        }
        div{
            display: flex;
            flex-direction: column;
            text-align: left;
            span{
                font-size: 12px;
                line-height: 1.33;
                &:first-child{
                    color: rgba(0,0,0,0.6);
                }
                &:nth-child(2){
                    color: rgba(0,0,0,1);
                }
            }
        }
    }
`;

const Item = styled.div`
    border-color: rgba(0,0,0,0.8);
    text-align: left;
    padding: 12px;
    font-size: 12px;
    display: block;
    span{
        display: flex;
        align-items: center;
    }
    &:hover{
        background-color: #EBEBEB;
    }
`;

const CommunityCard = styled(InfoCard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    a{
        color: #0A66C2;
        padding: 4px 12px;
        font-size: 12px;
        font-weight: 400;
        vertical-align: super;
        &:hover{
            text-decoration: underline;
        }
        span{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    &>span{
        color: rgba(0,0,0,0.6);
        align-self: center;
        font-size: 14px;
        font-weight: 600;
        border-top: 1px solid #d6cec2;
        width: 100%;
        text-align: center;
        padding: 12px 0;
        &:hover{
            background-color: #EBEBEB;
        }
    }
`;

const mapStateToProps = state => {
    return {
        user: state.userState.user
    };
}

export default connect(mapStateToProps)(LeftSection);