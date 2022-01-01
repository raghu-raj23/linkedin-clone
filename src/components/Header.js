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
                <Nav>
                    <NavListWrap>
                        <NavList>
                            <a href='.'>
                                <img src="./images/home-icon.svg" alt="home icon" />
                            </a>
                        </NavList>
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
    padding: 10px 24px;
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
            width: 218px;
            padding: 0 8px 0 40px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.75;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
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
    /* 120 */
`;

const NavList = styled.li``;

export default Header
