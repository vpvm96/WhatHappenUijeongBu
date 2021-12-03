import React, { useState } from 'react';
import styles from './login.module.css';
import AuthService from '../../service/authService';
import HttpClientFetch from './../../network/httpClientFetch';
import TokenStorage from '../../tokenStorage/tokenStorage';
import Resister from './register';
import { useHistory } from 'react-router-dom';



const Login = () => {
    const base = "http://localhost:8080"; // 노출시키면 안됨
    const httpClientFetch = new HttpClientFetch(base);
    const tokenStorage = new TokenStorage();
    const authService= new AuthService(httpClientFetch, tokenStorage);
    const history = useHistory();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const usernameChange = (e) => {
        e.preventDefault();
        setUser(e.target.value);
    }

    const passwordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const registerHandler = () => {
        history.push('/register')
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = authService.login(user, password);
        if(data) {
            history.push('/board');
        }else {
            alert("Login Failed");
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.maintitle}>LOGIN</div>
                <div className={styles.loginform}>
                    <form onSubmit={onSubmitHandler}>
                        <input 
                            type="text" 
                            name="user" 
                            onChange={usernameChange} 
                            className={styles.textfield} 
                            placeholder="아이디"
                        />
                        <input 
                            type="password" 
                            name="password" 
                            onChange={passwordChange} 
                            className={styles.textfield} 
                            placeholder="비밀번호"
                        />
                        <input 
                            type="submit" 
                            value="로그인" 
                            className={styles.submitbtn}
                        />
                        <input
                            type="submit"
                            value="회원가입"
                            onClick={ registerHandler }
                            className={styles.submitbtn}
                        />
                    </form>
                    <div className={styles.links}>
                        <a href="#">비밀번호를 잊어버리셨나요?</a>
                    </div>
                </div>
        </div>
    );
  };
  
  export default Login;