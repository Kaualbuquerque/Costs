import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"

/* Home styled components*/
import { HomeContainer, Title } from "../styles/pages_styles/styled_home"

/* Image import */
import savings from "../../assets/savings.svg"

function Home() {
    return (
        <Container>
            <HomeContainer>
                <Title>Bem-vindo ao <span>Costs</span></Title>
                <p>Comece a gerenciar seu projeto agora mesmo!</p>
                <LinkButton text="Criar Projeto" to="/newproject"/>
                <img src={savings} alt="Costs" />
            </HomeContainer>
        </Container>
    )
}

export default Home