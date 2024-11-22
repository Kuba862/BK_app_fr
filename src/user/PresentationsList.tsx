import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PresentationsList = () => {
  const { id } = useParams();
  const [presentations, setPresentations] = useState<any>();

  const fetchPresentations = async() => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_PRESENTATIONS_LIST_ENDPOINT}`, { params: { author: id } });
      setPresentations(response.data.data);
      console.log(response.data.data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPresentations();
  }, []);

  return (
    <>
    <div>PresentationsList</div>
    <aside>
        {presentations && presentations.map((presentation: any) => (
            <div key={presentation._id}>{presentation.title}</div>
        ))}
    </aside>
    </>
  )
}

export default PresentationsList