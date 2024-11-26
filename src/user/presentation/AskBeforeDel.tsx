import React from 'react';
import axios from 'axios';
import {
  DeleteContainer,
  DeleteButtonsContainer,
  DeleteButton,
  InfoText,
} from '../../style/AskBeforeDel';

interface AskBeforeDelProps {
  setAskBeforeDelete: (value: boolean) => void;
  presentationID: string;
  onDelete: () => void;
  title: string;
}

const AskBeforeDel = ({
  setAskBeforeDelete,
  presentationID,
  onDelete,
  title,
}: AskBeforeDelProps) => {
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_PERSENTATION_DELETE_ENDPOINT}/${presentationID}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setAskBeforeDelete(false);
      onDelete();
    }
  };

  return (
    <DeleteContainer>
      <InfoText>Czy na pewno chcesz trwale usunąć prezentację: <strong><i>{title}</i></strong>?</InfoText>
      <DeleteButtonsContainer>
        <DeleteButton onClick={handleDelete}>tak</DeleteButton>
        <DeleteButton onClick={() => setAskBeforeDelete(false)}>
          nie
        </DeleteButton>
      </DeleteButtonsContainer>
    </DeleteContainer>
  );
};

export default AskBeforeDel;
