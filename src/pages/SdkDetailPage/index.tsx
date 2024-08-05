import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const SdkDetailPage = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, [id]);
  return <>SdkDetailPage</>;
};
