import { useState } from "react"

export const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm);
    
    const handleForm = ({target}) => {
        setForm({
            ...form,
            [target.name] : target.value 
        });
    }
    const handleReset = () => {
        setForm(initialForm);
    }

    return {
        form,
        handleForm,
        handleReset
    }
}
