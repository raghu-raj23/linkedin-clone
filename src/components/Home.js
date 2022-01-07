import styled from "styled-components"
import { Route, Routes, Navigate } from "react-router-dom"
import { connect } from "react-redux"

import LeftSection from "./LeftSection";
import MainSection from "./MainSection";
import RightSection from "./RightSection";

function Home(props) {
    return (
        <Container>
            {!props.user && 
            <Routes>
                <Route path="/" element={<Navigate replace to="/" />} />
            </Routes>
            }
            <Layout>
                <LeftSection />
                <MainSection />
                <RightSection />
            </Layout>
        </Container>
    )
}

const Container = styled.div`
    max-width: 100%;
    padding: 62px;
`;

const Layout = styled.div`
    display: grid;
    /* grid-template-areas: "LeftSpace LeftSection MainSection RightSection RightSpace"; */
    max-width: 1128px;
    margin: 0 auto;
    grid-template-areas: "LeftSection MainSection RightSection";
    grid-template-columns: minmax(0, 4fr) minmax(0, 12fr) minmax(300px, 4fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    /* margin: 25px; */
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;

const mapStateToProps = state => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(Home);
