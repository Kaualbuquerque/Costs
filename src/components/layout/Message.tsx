import { useState, useEffect } from "react";

import style from "../styles/layout_styles/message.module.css"

interface Msg {
    type?: any;
    msg?: string;
}

function Message({ type, msg }: Msg) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000);

        return () => clearTimeout(timer)
    }, [msg])


    return <>
        {visible && (<p className={`${style.msg} ${style[type]}`}>{msg}</p>)}
    </>
}

export default Message