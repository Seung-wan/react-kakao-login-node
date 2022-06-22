import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
let didInit = false;
const OAuth2Redirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      const getToken = async () => {
        const payload = qs.stringify({
          grant_type: 'authorization_code',
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          redirectUri: process.env.REACT_APP_REDIRECT,
          code,
        });

        try {
          const token = await axios.post(
            'https://kauth.kakao.com/oauth/token',
            payload
          );

          const res = await axios.get(
            'http://localhost:3000/api/v1/auth/kakao/callback',
            {
              headers: {
                authorization: token.data.access_token,
              },
            }
          );

          localStorage.setItem('jwt', res.data);

          const data = await axios.get('http://localhost:3000/api/v1/profile', {
            headers: {
              authorization: localStorage.getItem('jwt') as string,
            },
          });
          localStorage.setItem('user', JSON.stringify(data.data.result));
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      };

      getToken();
    }
  }, [code, navigate]);

  return <div>Loading...</div>;
};

export default OAuth2Redirect;
