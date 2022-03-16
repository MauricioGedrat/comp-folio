import React from 'react'
import ReactDOM from 'react-dom'
import { useForm, ErrorMessage } from 'react-hook-form'

const isValidEmail = (email) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    )

export default function App() {
    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        defaultValues: {
            email: '',
        },
    })
    const onSubmit = () => {}

    const handleEmailValidation = (email) => {
        console.log('ValidateEmail was called with', email)

        const isValid = isValidEmail(email)

        const validityChanged =
            (errors.email && isValid) || (!errors.email && !isValid)
        if (validityChanged) {
            console.log('Fire tracker with', isValid ? 'Valid' : 'Invalid')
        }

        return isValid
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="email"
                name="email"
                ref={register({
                    required: true,
                    validate: handleEmailValidation,
                })}
            />
            <button type="submit">wfefefw</button>
            <ErrorMessage
                errors={errors}
                name="email"
                message="This is required"
            />
        </form>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
