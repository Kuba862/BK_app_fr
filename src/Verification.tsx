import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { VerificationMessage, VerificationButton, VerificationContainer } from './style/Verification';

const Verification = () => {
  const { token } = useParams();
  const [status, setStatus] = useState<boolean>(false);
  const navigate = useNavigate();

  const verifyHandler = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_VERIFY_ENDPOINT}/${token}`
      );
      setStatus(res.data.success);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <VerificationContainer>
      <h1>Zweryfikuj konto</h1>
      <VerificationButton onClick={verifyHandler}>Potwierdź email</VerificationButton>
      {status && <VerificationMessage>Konto zweryfikowane pomyślnie. Możesz się teraz zalogować.</VerificationMessage>}
    </VerificationContainer>
  );
};

export default Verification;
