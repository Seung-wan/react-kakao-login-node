## React Kakao Login with Express

- React를 이용하여 Kakao Login을 구현하였습니다.
- 서버는 Express를 이용하였고 직접 작성하였습니다. (developer-dignity-team-2 Organization)
- Client단에서 access_token을 Kakao server로 부터 얻어와 localStorage에 저장하고 Express 서버에 요청하여 jwt token을 받아오고 jwt token을 통해 사용자 정보를 받아와 localStorage에 저장하였습니다.
- 실 서비스에서 사용자 정보는 ContextAPI, Redux, Recoil등 전역 상태 관리 라이브러리를 이용하여 관리하면 될 것 같습니다.
