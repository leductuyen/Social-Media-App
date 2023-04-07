export const initialValue = {
    login_name: '',
    login_password: '',
}

export const formInput_Login = {
    login_name: {
        attrs: {
            id: 'login_name',
            name: 'login_name',
            type: 'text',
            placeholder: 'Enter your name',
        },
        validate: ['required'],
    },
    login_password: {
        attrs: {
            id: 'login_password',
            name: 'login_password',
            type: 'password',
            placeholder: 'Enter your password',
        },
        validate: ['required', 'password', 'between:6,16'],
    },
}
