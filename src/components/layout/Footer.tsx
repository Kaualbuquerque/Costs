/* Icon import */
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

/* Navbar Styled Components */
import { Foot, Social_list, Social, Copy_right } from "../styles/layout_styles/styled_footer"


function Footer() {
    return (
        <Foot>
            <Social_list>
                <Social> <FaFacebook /> </Social>
                <Social> <FaInstagram /> </Social>
                <Social> <FaLinkedin /> </Social>
            </Social_list>
            <Copy_right><span>Costs</span> &copy; 2024</Copy_right>
        </Foot>
    )
}

export default Footer