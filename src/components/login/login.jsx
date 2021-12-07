import React, { useState } from 'react';
import styles from './login.module.css';
// import AuthService from '../../service/authService';
// import HttpClientFetch from './../../network/httpClientFetch';
// import TokenStorage from '../../tokenStorage/tokenStorage';
// import Resister from './register';
// import { useHistory } from 'react-router-dom';



const Login = ({ onSignUp, onLogin }) => {
    // const base = "http://localhost:8080"; // 노출시키면 안됨
    // const httpClientFetch = new HttpClientFetch(base);
    // const tokenStorage = new TokenStorage();
    // const authService= new AuthService(httpClientFetch, tokenStorage);
    // const history = useHistory();
    const [onSignup, setOnSignup] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const setError = (error) => {
        setText(error.toString());
    }

    const onChange = (event) => {
        const {
            target: { name, value, checked },
        } = event;
        switch (name) {
            case 'username':
                return setUsername(value);
            case 'password':
                return setPassword(value);
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'onSignup':
                return setOnSignup(checked);
            default:
        }
    }

    // const registerHandler = (e) => {
    //     e.preventDefault();
    //     history.push('/register');
    // }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(onSignup) {
            onSignUp(username, password, name, email).catch(setError);
        } else {
            onLogin(username, password).catch(setError);
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.maintitle}>LOGIN</div>
                <div className={styles.loginform}>
                    <form onSubmit={onSubmitHandler}>
                        <input 
                            type="text" 
                            name="username" 
                            onChange={onChange} 
                            className={styles.textfield} 
                            placeholder="아이디"
                        />
                        <input 
                            type="password" 
                            name="password" 
                            onChange={onChange} 
                            className={styles.textfield} 
                            placeholder="비밀번호"
                        />
                        {onSignup && (
                            <input
                                name='name'
                                type='text'
                                placeholder='이름'
                                value={name}
                                onChange={onChange}
                                className={styles.textfield} 
                                required
                            />
                        )}
                        {onSignup && (
                            <input
                                name='email'
                                type='email'
                                placeholder='이메일'
                                value={email}
                                onChange={onChange}
                                className={styles.textfield} 
                                required
                            />
                        )}
                        <div>
                            <input
                                name='onSignup'
                                className={styles.check}
                                type='checkbox'
                                onChange={onChange}
                                checked={onSignup}
                            />
                            <label>회원가입</label>
                        </div>
                        <input 
                            type="submit" 
                            value={onSignup ? '회원가입' : '로그인'} 
                            className={styles.submitbtn}
                        />
                        {/* <input
                            type="submit"
                            value="회원가입"
                            onClick={ registerHandler }
                            className={styles.submitbtn}
                        /> */}
                    </form>
                    {/* <div className={styles.links}>
                        <a href="#">비밀번호를 잊어버리셨나요?</a>
                    </div> */}
                </div>
        </div>
    );
  };
  
  export default Login;