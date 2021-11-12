import React from 'react';
import styles from './login.module.css';

const Login = () => {
    return (
        <div className={styles.body}>
            <div className={styles.maintitle}>LOGIN</div>
                <div className={styles.loginform}>
                    <form>
                        <input type="text" name="email" className={styles.textfield} placeholder="아이디"/>
                        <input type="password" name="password" className={styles.textfield} placeholder="비밀번호"/>
                        <input type="submit" value="로그인" className={styles.submitbtn}/>
                    </form>
                    <div className={styles.links}>
                        <a href="#">비밀번호를 잊어버리셨나요?</a>
                    </div>
                </div>
        </div>
    );
  };
  
  export default Login;