import { useState } from "react"

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [errores, setErrores] = useState({})

    const validate = () => {
        const errors = {}

        if(!name.trim()) errors.name = "El nombre es obligatorio"
        if(!phone.trim()) errors.phone = "El teléfono es obligatorio"
        if(!email.trim()) {
            errors.email = "El email es obligatorio"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "El email no es válido"
        }

        setErrores(errors)

        return Object.keys(errors).length === 0
    }

    const handleConfirm = (event) => {
        event.preventDefault()

        if(!validate()) return

        const userData = {
            name,
            phone,
            email
        }

        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm}>
                <div className="form-floating mb-3">
                    <input id="nombre" className={`form-control ${errores.name ? "is-invalid" : "" }`} type="text" value={name} onChange={({target}) => setName(target.value)} />
                    <label htmlFor="nombre">Nombre</label>
                </div>

                <div className="form-floating mb-3">
                    <input id="telefono" className={`form-control ${errores.phone ? "is-invalid" : "" }`} type="text" value={phone} onChange={({target}) => setPhone(target.value)} />
                    <label htmlFor="telefono">Telefono</label>
                </div>

                <div className="form-floating mb-3">
                    <input id="email" className={`form-control ${errores.email ? "is-invalid" : "" }`} type="text" value={email} onChange={({target}) => setEmail(target.value)} />
                    <label htmlFor="email">Email</label>
                </div>
                <div>
                    <button type="submit">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm