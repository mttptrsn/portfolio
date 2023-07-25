type Props = {
    type?: string;
    title: string;
    state: string;
    placeholder: string;
    isTextArea?: boolean;
    setState: (value: string) => void;
}

const FormField = ({ type, title, state, placeholder, isTextArea, setState }: Props) => {
    return (
        <div className="w-full">
            <label htmlFor={type} className="block text-sm font-medium sr-only">{title}</label>
           

            {isTextArea ? (
                <textarea
                    placeholder={placeholder}
                    value={state}
                    className="form_field-input "
                    onChange={(e) => setState(e.target.value)}
                />
            ) : (
                <input
                    type={type || "text"}
                    placeholder={placeholder}
                    required
                    value={state}
                    className="form_field-input"
                    onChange={(e) => setState(e.target.value)}
                />
            )}

        </div>
           
      
    )
}

export default FormField;