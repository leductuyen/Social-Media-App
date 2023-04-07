import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './Login.scss'
import Input from '../../components/common/Input'
import { formInput_Login, initialValue } from './Config'
const Login = () => {
    //! State

    const { login } = useContext(AuthContext)

    const [formValues, setFormValues] = useState(initialValue)

    //! Function
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }
    const handleLogin = () => {
        login()
    }
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero cum, alias totam numquam ipsa exercitationem
                        dignissimos, error nam, consequatur.
                    </p>
                    <span>Dont you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>

                    <form>
                        <Input
                            onChange={handleChange}
                            value={formValues.login_name}
                            {...formInput_Login.login_name.attrs}
                        />
                        <Input
                            onChange={handleChange}
                            value={formValues.login_password}
                            {...formInput_Login.login_password.attrs}
                        />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
