import {Link} from "react-router-dom"


/* Link button styled component */
import { Btn } from "../styles/layout_styles/styled_linkButton";

function LinkButton(props: any) {
    return (
            <Btn to={props.to}>
                {props.text}
            </Btn>
    )
}

export default LinkButton