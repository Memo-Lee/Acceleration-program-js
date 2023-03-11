import React from 'react'
import { useFormik } from 'formik';

function Form() {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            firstName: 'mehmet',
            lastName: 'sönmez',
            email: 'mehmet@gmail.com',
            gender: "male",
            hobbies: [],
            country: "turkey",
        },
        onSubmit: async values => {
            await new Promise((r) => setTimeout(r, 500));
            console.log(values);
        },
    });


    return (
        <div className="App">
            <h1>Form Sign Up</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" value={values.firstName} name="firstName" onChange={handleChange} placeholder="Jane" />
                <br />
                <br />
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" value={values.lastName} name="lastName" onChange={handleChange} placeholder="Doe" />
                <br />
                <br />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <br />
                <br />
                <span>Male</span>
                <input
                    type={'radio'}
                    value='male'
                    name="gender"
                    onChange={handleChange}
                    placeholder=""
                    checked={values.gender === 'male'}
                />

                <span>Female</span>
                <input
                    type={'radio'}
                    value='female'
                    name='gender'
                    onChange={handleChange}
                    placeholder=""
                    checked={values.gender === 'female'}
                />
                <br /><br />
                <select value={values.country} name="country" onChange={handleChange}>
                    <option value="turkey" >Turkey</option>
                    <option value="england" >England</option>
                    <option value="usa" >USA</option>
                </select>
                <br /><br />
                <span htmlFor="hobbies">Football</span>
                <input type="checkbox" value={"Football"} name="hobbies" id="hobbies" onChange={handleChange} />
                <span htmlFor="hobbies">Basketball</span>
                <input type="checkbox" value={"Basketball"} name="hobbies" id="hobbies" onChange={handleChange} />
                <span htmlFor="hobbies">Read Book</span>
                <input type="checkbox" value={"Read Book"} name="hobbies" id="hobbies" onChange={handleChange} />
                <br /><br />
                <button type="submit">Submit</button>
                <br /><br />
                <code>{JSON.stringify(values)}</code>
            </form>

        </div>
    )
}

export default Form
