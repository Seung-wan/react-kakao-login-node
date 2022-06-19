import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import { userState } from '../../states/auth';

const cookie = new Cookies();

const Main = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <a href="http://localhost:3000/api/v1/auth/kakao">카카오 로그인</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Main;
