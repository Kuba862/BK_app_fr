import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import {
  MediaSection,
  Image,
  LoadMoreButton,
  ImageContainer,
  PopupOverlay,
  PopupContent,
  PopupButtons,
  DeleteButton,
  CancelButton,
  Message,
  Title
} from '../style/Media';

interface MediaItemType {
  index: number;
  filename: string;
  path: string;
}

const Media: React.FC = () => {
  const [media, setMedia] = useState<MediaItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchMedia = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_LIST_ALL_MEDIA_ENDPOINT}?page=${page}`,
          {
            headers: {
              'x-auth-token': token,
            },
          }
        );
        const newMedia = res.data.data;
        setMedia((prevMedia) => [...prevMedia, ...newMedia]);
        setHasMore(newMedia.length > 0);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMedia();
  }, [page]);

  const handleDelete = async (selectedImage: string): Promise<void> => {
    try {
        const token = localStorage.getItem('token');
        const imageName = selectedImage.split('/').pop();
        const res = await axios.delete(`${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_DELETE_MEDIA_ENDPOINT}/${imageName}`, {
            headers: {
                'x-auth-token': token
            }
        });
        setMessage(res.data.msg);
        setMedia((prevMedia) => prevMedia.filter((image) => image.path !== selectedImage));
        setSelectedImage('');
    } catch(err) {
        console.log(err);
        setMessage('Wystąpił błąd podczas usuwania zdjęcia. Spróbuj ponownie za chwilę.');
    }
  }

  return (
    <div>
      {isLoading && page === 1 ? (
        <LoadingSpinner />
      ) : (
        <>
          <Title>{media.length > 0 ? 'Twoje zapisane zdjęcia' : 'Nie masz jeszcze żadnych zdjęć'}</Title>
          <MediaSection>
            {media.map((image, index) => (
              <ImageContainer
                key={`${image.path}-${index}`}
                onClick={() => setSelectedImage(image.path)}
              >
                <Image
                  src={process.env.REACT_APP_BE_API_URL + image.path}
                  alt={image.filename}
                />
                {selectedImage && (
                  <PopupOverlay onClick={() => setSelectedImage('')}>
                    <PopupContent onClick={(e) => e.stopPropagation()}>
                      <p>Czy na pewno chcesz usunąć to zdjęcie?</p>
                      <PopupButtons>
                        <DeleteButton
                          onClick={() => handleDelete(selectedImage)}
                        >
                          Usuń
                        </DeleteButton>
                        <CancelButton onClick={() => setSelectedImage('')}>
                          Anuluj
                        </CancelButton>
                      </PopupButtons>
                    </PopupContent>
                  </PopupOverlay>
                )}
              </ImageContainer>
            ))}
            {isLoading && page > 1 && <LoadingSpinner />}
          </MediaSection>
          {hasMore && !isLoading && (
            <LoadMoreButton onClick={() => setPage(page + 1)}>
              Załaduj więcej zdjęć
            </LoadMoreButton>
          )}
        </>
      )}
      {message && <Message>{message}</Message>}
    </div>
  );
};

export default Media;
