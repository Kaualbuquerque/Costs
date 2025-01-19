import { Link } from "react-router-dom"
import Container from "./Container"

/* Image import */
import logo from "../../assets/costs_logo.png"

/* Navbar Styled Components */
import { Nb, List, Item } from "../styles/layout_styles/styled_navbar"

function Navbar() {
    return (
        <Nb>
            <Container>
                <img src={logo} alt="Costs" />
                <List>
                    <Item><Link to="/">Home</Link></Item>
                    <Item><Link to="/Projects">Projects</Link></Item>
                    <Item><Link to="/company">Company</Link></Item>
                    <Item><Link to="/contact">Contact</Link></Item>
                </List>
            </Container>
        </Nb>
    )
}

export default Navbar