import loading from "../../assets/loading.svg"

import { LoaderContainer } from "../styles/layout_styles/styled_loading"

function Loader(){
    return (
        <LoaderContainer >
            <img src={loading} alt="Loading" />
        </LoaderContainer>
    )
}

export default Loader