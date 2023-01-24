import React, {useState} from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './FormikYup.css';
// getting values. 
// validation and error message
// handling the form submission

// 1. create intial values for your inputs 
const intialValues = {
    email : "",
    password : ""
}

// 1 b) . I can have custom validation
// 2. Yup Schema

const loginSchema  = Yup.object().shape({
    //write what you are targetting 
    email: Yup.string().email().required("Email is Required | Check the format of your email"),
    password: Yup.string().required("Password is Required")
            .min(5,"Password is too short!!"),

});

const FormikYupForm = () => {


   return (
    <Formik
    initialValues={intialValues}
    validationSchema={loginSchema}
    onSubmit={(values) => {
      console.log(values.email);
    }}
  >
    {(formik) => {
      const { errors, touched, isValid, dirty } = formik;
      return (
        <div className="container">
          <h1>Sign in to continue</h1>
          <Form>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                className={errors.email && touched.email ? 
                "input-error" : null}
              />
              <ErrorMessage name="email" component="span" className="error" />
            </div>

            <div className="form-row">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                className={errors.password && touched.password ? 
                "input-error" : null}
              />
              <ErrorMessage
                name="password"
                component="span"
                className="error"
              />
            </div>

            <button
              type="submit"
              className={!(dirty && isValid) ? "disabled-btn" : ""}
              disabled={!(dirty && isValid)}
            >
              Sign In
            </button>
          </Form>
        </div>
      );
    }}
  </Formik>
   );
}

export default FormikYupForm