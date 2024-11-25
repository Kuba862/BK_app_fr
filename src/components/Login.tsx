import React, { useRef, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import { LoginForm, LoginInfo } from '../style/Login';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<string>('');
  const { login } = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!email || !password) {
      setLoginInfo('Please fill in all fields');
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_LOGIN_ENDPOINT}`,
        {
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
        }
      );
        login(res.data.token);
        if(res.data.logged) {
            setLoginInfo(res.data.name);
        }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Email</label>
          <input type="email" required ref={emailRef} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" required ref={passwordRef} />
        </div>
        <div>
          <button type="submit">login</button>
        </div>
      </LoginForm>
      {loginInfo && <LoginInfo>{loginInfo}</LoginInfo>}
    </div>
  );
};

export default Login;
