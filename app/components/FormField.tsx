type Props = {
    type?: string;
    name: string;
    title: string;
    state: string;
    placeholder: string;
    isTextArea?: boolean;
    minLength?: number;
    maxLength?: number;
    setState: (value: string) => void;
}

const FormField = ({ type, name, title, state, placeholder, isTextArea, minLength, maxLength, setState }: Props) => {
    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-sm font-medium sr-only">{title}</label>
           

            {isTextArea ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    required
                    minLength={minLength}
                    maxLength={maxLength}
                    value={state}
                    className="form_field-input "
                    onChange={(e) => setState(e.target.value)}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type || "text"}
                    placeholder={placeholder}
                    required
                    minLength={minLength}
                    maxLength={maxLength}
                    value={state}
                    className="form_field-input"
                    onChange={(e) => setState(e.target.value)}
                />
            )}

        </div>
           
      
    )
}

export default FormField;
