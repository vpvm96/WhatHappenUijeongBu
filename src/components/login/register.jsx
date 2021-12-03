import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import styles from './register.module.css';
import AuthService from "../../service/authService";
import HttpClientFetch from './../../network/httpClientFetch';
import TokenStorage from '../../tokenStorage/tokenStorage';

function Resister() {
  const base = "http://localhost:8080";
  const httpClientFetch = new HttpClientFetch(base);
  const tokenStorage = new TokenStorage();
  const authService= new AuthService(httpClientFetch, tokenStorage);
  const history = useHistory();

  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registerFlag, setRegisterFlag] = useState(false);


  const usernameChangeHandler = (e) => {
    setUser(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const checkPasswordChangeHandler = (e) => {
    setCheckPassword(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const checkInformation = async () => {
    if(username.length < 4) {
      alert('Username should be at least 4 characters...');
      setRegisterFlag(false);
    } else if(password.length < 8) {
      alert('Password should be at least 8 characters...');
      setRegisterFlag(false);
    } else if(password !== checkPassword) {
      alert('Please check your password...');
      setRegisterFlag(false);
    } else if(name.length === 0) {
      alert('Name is missing...');
      setRegisterFlag(false);
    } else {
      setRegisterFlag(true);
    }

    return await registerFlag;
  }


  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = authService.signup(username, password, name, email);
    if (checkInformation()) {
      if (data) {
        history.push('/login');
      } else {
      alert('Check your information!');
    };
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Link to="/main"/>
      <div className={styles.wapper}>
        <div className={styles.content}>
          <div>
            <h3>ID</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="Enter ID"
                onChange={usernameChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>PASSWORD</h3>
            <span className={styles.box_id}>
              <input
                type="password"
                minLength='8'
                className={styles.int}
                placeholder="Enter password"
                onChange={passwordChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>CONFIRM PASSWORD</h3>
            <span className={styles.box_id}>
              <input
                type="password"
                className={styles.int}
                placeholder="Confirm password"
                onChange={checkPasswordChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>E-MAIL</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="ex) sungkonghoe@skhu.ac.kr"
                onChange={emailChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>NICK NAME</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="Your name in SmallMarket"
                onChange={nameChangeHandler}
              ></input>
            </span>
          </div>
          <div className={styles.btn}>
            <button className={styles.btnJoin} type="submit">
              <span>Ready to Jump</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
}

export default Resister;
