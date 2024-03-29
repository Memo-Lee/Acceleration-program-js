import React from 'react'
import { Formik, Form, Field } from 'formik';

function FormFormik() {
    return (
        <div className="App">
            <h1>Formik Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    console.log(values);
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane" />
                    <br />
                    <br />
                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />
                    <br />
                    <br />
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
export default FormFormik
