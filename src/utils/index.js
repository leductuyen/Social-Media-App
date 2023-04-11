export const validate = (formValues, formInputs) => {
    let errors = {}

    Object.entries(formInputs).forEach(([key, value]) => {
        const validators = value.validate

        if (validators) {
            validators.forEach((validator) => {
                const [rule, ...args] = validator.split(':')

                switch (rule) {
                    case 'required':
                        if (!formValues[key]) {
                            errors[key] = 'This field is required'
                        }
                        break
                    case 'email':
                        // Validate email format
                        break
                    case 'password':
                        if (
                            !formValues[key] ||
                            formValues[key].length < 6 ||
                            formValues[key].length > 16
                        ) {
                            errors[key] =
                                'Password must be between 6 and 16 characters'
                        }
                        break
                    case 'between':
                        // Validate length of value is between given range
                        break
                    default:
                        break
                }
            })
        }
    })

    return errors
}
