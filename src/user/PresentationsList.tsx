import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AskBeforeDel from './presentation/AskBeforeDel';
import {
  PresentationsContainer,
  PresentationsHeader,
  PresentationsList as StyledPresentationsList,
  PresentationCard,
  PresentationTitle,
  ButtonsContainer,
  ActionButton,
} from '../style/PresentationsList';

const PresentationsList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [presentations, setPresentations] = useState<any>();
  const [selectedForDelete, setSelectedForDelete] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const fetchPresentations = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_PRESENTATIONS_LIST_ENDPOINT}`,
        { params: { author: id } }
      );
      setPresentations(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleDelete = (presentationId: string) => {
    setSelectedForDelete((prevId) =>
      prevId === presentationId ? null : presentationId
    );
  };

  const handleCopy = async (presentationId: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(presentationId);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch(err) {
      console.log(err);
    }
  }

  const handleEdit = (presentationId: string) => {
    navigate(`/add-presentation/${id}/?presentationID=${presentationId}`);
  };

  useEffect(() => {
    fetchPresentations();
  }, []);

  return (
    <PresentationsContainer>
      <PresentationsHeader>Twoje prezentacje</PresentationsHeader>
      <StyledPresentationsList>
        {presentations &&
          presentations.map((presentation: any) => (
            <PresentationCard key={presentation._id}>
              <PresentationTitle>{presentation.title}</PresentationTitle>
              <strong>Data utworzenia:</strong>{' '}
            {new Date(presentation.createdAt).toLocaleDateString('pl-PL', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
              <ButtonsContainer>
                <ActionButton
                  variant="edit"
                  onClick={() => handleEdit(presentation._id)}
                >
                  edytuj
                </ActionButton>
                <ActionButton
                  variant="delete"
                  onClick={() => toggleDelete(presentation._id)}
                >
                  usuń
                </ActionButton>
                <ActionButton variant="copy" onClick={() => handleCopy(presentation._id, presentation.content)}>{copiedId === presentation._id ? 'skopiowano HTML' : 'skopiuj HTML'}</ActionButton>
              </ButtonsContainer>
            </PresentationCard>
          ))}
      </StyledPresentationsList>
      {selectedForDelete && (
        <AskBeforeDel
          setAskBeforeDelete={() => toggleDelete(selectedForDelete)}
          presentationID={selectedForDelete}
          onDelete={fetchPresentations}
          title={presentations?.find((p: any) => p._id === selectedForDelete)?.title}
        />
      )}
    </PresentationsContainer>
  );
};

export default PresentationsList;
