import { useState, useEffect } from 'react';

import { IUser } from '../../types/user';
import { KAKAO_AUTH_URL } from '../../utils/oAuth';

const Main = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (localStorage.getItem('user'))
      setUser(JSON.parse(localStorage.getItem('user') as string)[0]);
  }, []);

  return (
    <header>
      <nav>
        <a href={KAKAO_AUTH_URL}>카카오 로그인</a>
      </nav>
      {user && <p>{user.email}</p>}
    </header>
  );
};

export default Main;
