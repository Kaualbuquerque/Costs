/* Container styled component */
import style from "../styles/layout_styles/container.module.css"

interface ContainerProps {
    customClass?: any;
    children?: React.ReactNode;
}

function Container({ customClass, children }: ContainerProps) {
    return <div className={`${style.cont} ${style[customClass]}`}>{children}</div>;
}

export default Container