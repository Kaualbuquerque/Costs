/* Input styled component */
import { FormControl, FC_btn } from "../../styles/project_styles/styled_projectForm"

interface InputProps {
    text?: string;
}

function SubmitButton({ text }: InputProps) {
    return (
        <FormControl>
            <FC_btn >{text}</FC_btn>
        </FormControl>
    )
}

export default SubmitButton