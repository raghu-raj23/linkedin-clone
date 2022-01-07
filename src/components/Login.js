import styled from 'styled-components';
import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Routes, Route, Navigate } from "react-router-dom";

const Login = (props) => {
    return (
        <Container>
            {
                props.user &&
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            }

            <Nav>
                <a href=''>
                    <img src="./images/login-logo.svg" alt="LinkedIn logo" />
                </a>
                <div>
                    <Join>Join Now</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="./images/login-hero-now.svg" alt="hero" />
                </Hero>
                <Form>
                    <Google onClick={() => props.signIn()}>
                        <img src="./images/google.svg" alt="google" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    );
};


const Container = styled.div`
    padding: 10px;
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.7);
    margin-right: 12px;
    &:hover {
        background-color: rgba(0,0,0,0.07);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
        border-radius: 4px;
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);
    &:hover{
        background-color: rgba(112,181,249,0.15);
        color: #0a66c2;
        text-decoration: none;
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: row;
    align-content: start;
    min-height: 700px;
    padding: 50px 0 178px;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;
        flex-direction: column;
        align-items: center;
    }
`;

const Hero = styled.div`
    width: 100%;
    h1{
        padding: 0;
        width: 55%;
        font-size: 56px;
        font-family: 'Segoe UI';
        color: rgba(143, 88, 73, 1);
        font-weight: 200;
        line-height: 1.2;
        text-align: left;
        @media(max-width: 768px){
            font-size: 32px;
            width: 100%;
            line-height: 2;
        }
    }
    img{
        /* z-index: -1; */
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media(max-width: 768px){
            top: 230px;
            width: 55vw;
            position: initial;
            left:auto;
            right: auto;
            height: initial;
        }
    }
`;

const Form = styled.div`
    margin: 100px 0 0;
    width: 410px;
    @media(max-width: 768px){
        margin: 20px 0 0;
    }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    border: 1px solid rgba(0,0,0,0.5);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    &>img{
        padding: 0 10px;
    }
    color: rgba(0,0,0,0.5);
    &:hover{
        background-color: rgba(207,207,207,0.25);
        color: rgba(0,0,0,0.75);
    }
`;

const mapStateToProps = state => {
    return {
        user: state.userState.user,
    };
};



const mapDispatchToProps = dispatch => ({
    signIn: () => dispatch(signInAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);