import React, { useRef, useState } from 'react';
import axios from 'axios';
import { RegisterForm, RegisterMessage } from '../style/Register';

const Register = () => {
  const [responseMsg, setResponseMsg] = useState<string>('');
  const [validForm, setValidForm] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);

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
      const res = await axios.post(
        `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_REGISTER_ENDPOINT}`, {
            firstName: firstName.current?.value,
            lastName: lastName.current?.value,
            email: email.current?.value,
            password: password.current?.value,
            repeatPassword: confirmPassword.current?.value
        }
      );
      setStatus(res.data.success);
      Object.values(refs).forEach((ref) => ref.current!.value = '');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={(e) => handleSubmit(e)} >
        <div>
          <label>Imię</label>
          <input type="text" onChange={validateFields} required ref={refs.firstName} />
        </div>
        <div>
          <label>Nazwisko</label>
          <input type="text" onChange={validateFields} required ref={refs.lastName} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" onChange={validateFields} required ref={refs.email} />
        </div>
        <div>
          <label>Hasło</label>
          <input type="password" onChange={validateFields} required ref={refs.password} />
        </div>
        <div>
          <label>Potwierdź hasło</label>
          <input type="password" onChange={validateFields} required ref={refs.confirmPassword} />
        </div>
        <div>
          <button type="submit">Zarejestruj się</button>
        </div>
      </RegisterForm>
      {status && <RegisterMessage>Zweryfikuj konto. Sprawdź swoją skrzynkę email i kilknij w link weryfikacyjny. Jeśli nie widzisz maila, sprawdź folder ze spamem.</RegisterMessage>}
    </div>
  );
};

export default Register;
