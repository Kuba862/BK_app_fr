import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Verification = () => {
  const { token } = useParams();
  const [status, setStatus] = useState<boolean>(false);

  const verifyHandler = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_VERIFY_ENDPOINT}/${token}`
      );
      setStatus(res.data.success);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Verification</h1>
      <button onClick={verifyHandler}>potwierdź email</button>
      {status && <p>Konto zweryfikowane pomyślnie. Możesz się teraz zalogować.</p>}
    </>
  );
};

export default Verification;
