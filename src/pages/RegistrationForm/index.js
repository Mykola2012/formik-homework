import React from 'react';
import UserRegistrationForm from '../../components/UserRegistrationForm';
import logo from '../../img/logo.png';
import styles from './RegistationForm.module.scss';

function RegistationForm () {
  return (
    <>
      <header className={styles.registrationHeader}>
        <a href='https://www.squadhelp.com/' target='_blank' rel='noreferrer'>
          <img src={logo} alt='logo' />
        </a>
        <button className={styles.loginBtn}>Login</button>
      </header>
      <main className={styles.mainRegistarationForm}>
        <div className={styles.textWrapper}>
          <h2>CREATE AN ACCOUNT</h2>
          <p>We always keep your name and email address private.</p>
        </div>
        <UserRegistrationForm />
      </main>
    </>
  );
}

export default RegistationForm;
