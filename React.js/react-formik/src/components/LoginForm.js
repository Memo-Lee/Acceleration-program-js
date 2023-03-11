import React from 'react'
import { useFormik } from 'formik';
import validations from './validations';

function LoginForm() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: async values => {
            await new Promise((r) => setTimeout(r, 500));
            console.log(values);
        },
        validationSchema: validations
    });
    return (
        <div className="App">
            <h1>Login Form </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    placeholder="jane@acme.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.email && touched.email && <div className='error'>{errors.email}</div>}
                <br /><br />
                <label htmlFor="email">Password</label>
                <input
                    name="password"
                    placeholder="*******"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.password && touched.password && <div className='error'>{errors.password}</div>}
                <br /><br />
                <label htmlFor="email">Confirm Password</label>
                <input
                    name="confirmPassword"
                    placeholder="*******"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}
                <br /><br />
                <button type="submit">Submit</button>
                <br /><br />
                <code>{JSON.stringify(values)}</code>
            </form>

        </div>
    )
}

export default LoginForm
