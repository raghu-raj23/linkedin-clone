import React from 'react'
import styled from 'styled-components';

function Header(props) {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href='/home'>
                        <img src="./images/home-logo.svg" alt="LinkedIn logo" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src="./images/search-icon.svg" alt="search icon" />
                    </SearchIcon>
                </Search>
                {/* Nav items */}
                <Nav>
                    <NavListWrap>
                        <NavList className='active'>
                            <a>
                                <img src="./images/nav-home.svg" alt="home icon" />
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="./images/nav-network.svg" alt="home icon" />
                                <span>My Network</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="./images/nav-jobs.svg" alt="home icon" />
                                <span>Jobs</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="./images/nav-messaging.svg" alt="home icon" />
                                <span>Messaging</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="./images/nav-notifications.svg" alt="home icon" />
                                <span>Notifications</span>
                            </a>
                        </NavList>
                        <User>
                            <a>
                                <img src="./images/user.svg" alt="home icon" />
                                <span>Me
                                <img src="./images/down-icon.svg" alt="home icon" />
                                </span>
                            </a>
                            <SignOut>
                                <a>
                                    Sign Out
                                </a>
                            </SignOut>
                        </User>
                        <Work>
                            <a>
                                <img src="./images/nav-work.svg" alt="home icon" />
                                <span>Work
                                    <img src='/images/down-icon.svg' alt="home icon" />
                                </span>
                            </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left: 0;
    /* padding: 0 24px; */
    padding: 0 auto;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100vw;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;

const Search = styled.div`
    display: flex;
    position: relative;
    opacity: 1;
    flex-grow: 1;
    & > div{
        max-width: 280px;
        & > input{
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0,0,0,0.9);
            width: 232px;
            padding: 0 8px 0 40px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.75;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
            transition-duration: 207ms;
        }
        &>input:hover{
            width: 340px;
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.15s ease-in-out;
    
`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media(max-width: 768px){
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: #fff;
        width: 100%;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    .active{
        span:after{
            content: "";
            transform: scaleX(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2s ease-in-out;
            border-color: rgba(0,0,0,0.9);
            width: 100%;
        }
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.75;
        min-height: 52px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        span{
            color: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
        }
        @media(max-width: 768px){
            min-width: 70px;
        }
    }
    &:hover, &:active {
        a{
            span{
                color: rgba(0,0,0,0.9);
            }
            
        }
    }
`;

const SignOut = styled.div`
    position: absolute;
    top: 70px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none;
`;

const User = styled(NavList)`
    a>img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    span{
        display: flex;
        align-items: center;
        &>img{
            width: 16px;
            height: 16px;
        }
    }
    &:hover{
        ${SignOut}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0,0,0,0.08);

`;



export default Header
