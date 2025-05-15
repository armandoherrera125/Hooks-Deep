import { useState } from "react"
import { useForm } from "./hooks/useForm";

export const SimpleForm = () => {
    const {form, handleForm, handleReset} = useForm({
        name: '',
        lastName: '',
        checked: false
    }); 
    const { name, lastName, checked } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name.trim() === '' || form.lastName.trim() === '') return;
        console.log(form);
        handleReset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-10 h-screen justify-center items-center font-serif bg-[#f7f6f5]">
                <div className="p-8 w-full max-w-md bg-[#c2baaf] shadow-2xl rounded-3xl flex flex-col gap-6">
                    <h1 className="text-3xl text-center font-bold text-[#292321]">
                        Ingrese su información
                    </h1>

                    <div className="flex flex-col gap-2">
                        <label className="text-[#292321] font-semibold" htmlFor="nombre">
                            Nombre:
                        </label>
                        <input
                            name="name"
                            className="rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c2baaf]"
                            type="text"
                            placeholder="Escriba su nombre"
                            value={name}
                            onChange={handleForm}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[#292321] font-semibold" htmlFor="apellido">
                            Apellido:
                        </label>
                        <input
                            name="lastName"
                            className="rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c2baaf]"
                            type="text"
                            placeholder="Escriba su apellido"
                            value={lastName}
                            onChange={handleForm}
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            name="checked"
                            type="checkbox"
                            checked={checked}
                            onChange={handleForm}
                            className="w-5 h-5 text-[#292321] focus:ring-[#c2baaf] rounded"
                        />
                        <label htmlFor="check" className="text-[#292321]">
                            Acepto los términos y condiciones
                        </label>
                    </div>

                    <button disabled={(name.trim() === '' || lastName.trim() === '' || !checked) && 'disabled'} className="bg-gradient-to-br from-[#988777] to-[#8b786b] hover:opacity-90 cursor-pointer text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200">
                        Reset
                    </button>
                </div>
            </div>
        </form>
    )
}
