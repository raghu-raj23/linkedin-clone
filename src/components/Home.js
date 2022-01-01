import styled from "styled-components"
import Header from "./Header";

function Home(props) {
    return (
        <Outercontainer>
            <Header />
            Home
        </Outercontainer>
    )
}

const Outercontainer = styled.div`
    min-height: 100vh;
    min-width: 100vh;
    background-color: #F3F2EF;
`;

export default Home;
