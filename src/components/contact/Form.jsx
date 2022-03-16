import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const FormTeste = () => {
    const {
        register,
        handleSubmit,
        formState: { isValid, errors },
    } = useForm({
        mode: 'onChange',
    })
    console.log(errors)

    const onSubmit = (data) => {
        console.log('onSubmit', data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <label htmlFor="email">
                            E-mail <span className="text-red-500">*</span>
                        </label>
                    </div>
                    <input
                        type="email"
                        placeholder="example@example.com"
                        className="p-4 border border-gray-300 rounded-md outline-none w-[100%] mb-8"
                        name="email"
                        {...register('Email', {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="name">
                            Nome <span className="text-red-500">*</span>
                        </label>
                    </div>
                    <input
                        type="text"
                        name="name"
                        className="p-4 border border-gray-300 rounded-md outline-none w-[100%] mb-8"
                        placeholder="Nome Completo"
                        {...register('Nome', {
                            required: true,
                        })}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="Empresa">Empresa</label>
                    </div>
                    <input
                        type="text"
                        name="Empresa"
                        className="p-4 border border-gray-300 rounded-md outline-none w-[100%] mb-8"
                        placeholder="Nome da sua empresa"
                        {...register('Empresa', {
                            required: false,
                        })}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="Site">Website</label>
                    </div>
                    <input
                        type="text"
                        name="Site"
                        className="p-4 border border-gray-300 rounded-md outline-none w-[100%] mb-8"
                        placeholder="Link do seu site"
                        {...register('Site', {
                            required: false,
                        })}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="message">
                            Mensagem <span className="text-red-500">*</span>
                        </label>
                    </div>
                    <textarea
                        name="message"
                        type="text"
                        placeholder="Sua mensagem"
                        className="p-4 border border-gray-300 rounded-md outline-none w-[100%] mb-8"
                        {...register('Mensagem', {
                            required: true,
                        })}
                    />
                </div>

                <button
                    disabled={!isValid}
                    type="submit"
                    className="px-20 py-4 bg-[#FFE600] rounded-md font-semibold cursor-pointer disabled:cursor-default disabled:opacity-60"
                >
                    {!isValid ? 'Preencha o formulário' : 'Enviar'}
                </button>
            </form>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default FormTeste
