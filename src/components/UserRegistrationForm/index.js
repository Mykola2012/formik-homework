import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

function UserRegistrationForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    emailAddress: '',
    password: '',
    passwordConfirmation: '',
    statusUser: '',
    isMarketing: false,
  };

  const handleSubmit = (values, formikBag) => {
    console.log('values', values);
    console.log('formikBag', formikBag);
    formikBag.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {formikProps => {
          return (
            <Form>
              <div>
                <Field
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  autoFocus
                />
                <ErrorMessage name='firstName' />

                <Field type='text' name='lastName' placeholder='Last Name' />
                <ErrorMessage name='lastName' />
              </div>

              <div>
                <Field
                  type='text'
                  name='displayName'
                  placeholder='Display Name'
                />
                <ErrorMessage name='displayName' />

                <Field
                  type='email'
                  name='emailAddress'
                  placeholder='Email Address'
                />
                <ErrorMessage name='emailAddress' />
              </div>

              <div>
                <Field type='password' name='password' placeholder='Password' />
                <ErrorMessage name='password' />

                <Field
                  type='password'
                  name='passwordConfirmation'
                  placeholder='Password Confirmation'
                />
                <ErrorMessage name='passwordConfirmation' />
              </div>

              <div>
                <Field type='radio' name='statusUser' value='buyer' />
                <div>
                  <h3>Join As a Buyer</h3>
                  <p>
                    I am looking for a Name, Logo or Tagline for my business,
                    brand or product.
                  </p>
                </div>
              </div>
              <div>
                <Field type='radio' name='statusUser' value='seller' />
                <div>
                  <h3>Join As a Creative or Marketplace Seller</h3>
                  <p>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </p>
                </div>
              </div>
              <div>
                <Field type='checkbox' name='isMarketing' />
                <p>
                  Allow Squadhelp to send marketing/promotional offers from time
                  to time
                </p>
              </div>
              <button type='submit'>Create account</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default UserRegistrationForm;
