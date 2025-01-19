/* Input styled component */
import { FormControl, FC_label, FC_select } from "../../styles/project_styles/styled_projectForm"

interface InputProps {
    text?: string;
    name?: string;
    options?: any;
    handleOnChange?: any;
    value?: string;
}

function Select({ text, name, options, handleOnChange, value }: InputProps) {
    return (
        <FormControl>
            <FC_label htmlFor={name}>{text}</FC_label>
            <FC_select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}>

                <option>Selecione uma opção</option>
                {options.map((option: any) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            
            </FC_select>
        </FormControl>
    )
}

export default Select