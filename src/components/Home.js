import styled from "styled-components"
import LeftSection from "./LeftSection";
import MainSection from "./MainSection";
import RightSection from "./RightSection";

function Home(props) {
    return (
            <Container>
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
    grid-template-areas: "LeftSpace LeftSection MainSection RightSection RightSpace";
    grid-template-columns: minmax(0, 4fr) minmax(0, 3fr) minmax(0, 7fr) minmax(300px, 4fr) minmax(0, 4fr);
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


export default Home;
