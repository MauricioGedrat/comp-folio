import React from 'react'
import { useForm } from 'react-hook-form'

const FormTeste = () => {
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm({
        mode: 'onChange',
    })

    const onSubmit = (data) => {
        console.log('onSubmit', data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Email"
                    {...register('Email', {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                />
                <input
                    type="nome"
                    placeholder="Nome Completo"
                    {...register('Nome', {
                        required: true,
                    })}
                />

                <button disabled={!isValid} type="submit">
                    {!isValid ? 'Preencha o formulário' : 'Enviar'}
                </button>
            </form>
        </div>
    )
}

export default FormTeste
