import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { USER_REGISTRATION_VALIDATION_SCHEMA } from '../../utils/validationSchemas';
import styles from './UserRegistrationForm.module.scss';

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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={USER_REGISTRATION_VALIDATION_SCHEMA}
      >
        {formikProps => {
          return (
            <Form className={styles.formWrapper}>
              <div className={styles.inputWrapper}>
                <Field type='text' name='firstName' placeholder='First Name' />
                <ErrorMessage name='firstName'>
                  {msg => <div className={styles.errorMessageLeft}>{msg}</div>}
                </ErrorMessage>

                <Field type='text' name='lastName' placeholder='Last Name' />
                <ErrorMessage name='lastName'>
                  {msg => <div className={styles.errorMessageRight}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div className={styles.inputWrapper}>
                <Field
                  type='text'
                  name='displayName'
                  placeholder='Display Name'
                />
                <ErrorMessage name='displayName'>
                  {msg => <div className={styles.errorMessageLeft}>{msg}</div>}
                </ErrorMessage>

                <Field
                  type='email'
                  name='emailAddress'
                  placeholder='Email Address'
                />
                <ErrorMessage name='emailAddress'>
                  {msg => <div className={styles.errorMessageRight}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div className={styles.inputWrapper}>
                <Field type='password' name='password' placeholder='Password' />
                <ErrorMessage name='password'>
                  {msg => <div className={styles.errorMessageLeft}>{msg}</div>}
                </ErrorMessage>

                <Field
                  type='password'
                  name='passwordConfirmation'
                  placeholder='Password Confirmation'
                />
                <ErrorMessage name='passwordConfirmation'>
                  {msg => <div className={styles.errorMessageRight}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div
                className={classNames(
                  styles.inputRadioWrapper,
                  styles.inputRadioWrapperTop
                )}
              >
                <Field type='radio' name='statusUser' value='buyer' />

                <div className={styles.infoTextRadio}>
                  <h3 className={styles.titleRadio}>Join As a Buyer</h3>
                  <p className={styles.textRadio}>
                    I am looking for a Name, Logo or Tagline for my business,
                    brand or product.
                  </p>
                </div>
              </div>
              <div className={styles.inputRadioWrapper}>
                <Field type='radio' name='statusUser' value='seller' />
                <div className={styles.infoTextRadio}>
                  <h3 className={styles.titleRadio}>
                    Join As a Creative or Marketplace Seller
                  </h3>
                  <p className={styles.textRadio}>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </p>
                </div>
                <ErrorMessage name='statusUser'>
                  {msg => (
                    <div className={styles.errorMessageStatusUser}>{msg}</div>
                  )}
                </ErrorMessage>
              </div>

              <div className={styles.checkboxWrapper}>
                <Field type='checkbox' name='isMarketing' />

                <p>
                  Allow Squadhelp to send marketing/promotional offers from time
                  to time
                </p>
              </div>
              <button className={styles.createBtn} type='submit'>
                Create account
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default UserRegistrationForm;
