import React, { useRef, useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [responseMsg, setResponseMsg] = useState<string>('');
  const [validForm, setValidForm] = useState<boolean>(false);

  const refs = {
    firstName: useRef<HTMLInputElement>(null),
    lastName: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    confirmPassword: useRef<HTMLInputElement>(null),
  };

  const validateFields = () => {
    const isValid = Object.values(refs).every((ref) => ref.current?.value);
    setValidForm(isValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = refs;
    try {
      await axios.post(
        `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_REGISTER_ENDPOINT}`, {
            firstName: firstName.current?.value,
            lastName: lastName.current?.value,
            email: email.current?.value,
            password: password.current?.value,
            repeatPassword: confirmPassword.current?.value
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} >
        <div>
          <label>First Name</label>
          <input type="text" onChange={validateFields} required ref={refs.firstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" onChange={validateFields} required ref={refs.lastName} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" onChange={validateFields} required ref={refs.email} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={validateFields} required ref={refs.password} />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" onChange={validateFields} required ref={refs.confirmPassword} />
        </div>
        <div>
          <button type="submit">register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
