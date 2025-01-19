/* Input styled component */
import { FormControl, FC_label, FC_input } from "../../styles/project_styles/styled_projectForm"

interface InputProps {
    type?: string;
    text?: string;
    name?: string;
    placeholder?: string;
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

function Input({ type, text, name, placeholder, handleOnChange, value }: InputProps) {
    return (
        <FormControl>
            <FC_label htmlFor={name}>{text}</FC_label>
            <FC_input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                required
            />
        </FormControl>
    )
}

export default Input