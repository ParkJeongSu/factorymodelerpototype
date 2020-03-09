// 액션 타입 정의
const LOGIN = 'logInOut/LOGIN';
const LOGOUT = 'logInOut/LOGOUT';
const CHANGEID = 'logInOut/CHANGEID';


// **** 액션 생섬함수 정의
export const logIn = () => ({ type: LOGIN });
export const logOut = () => ({ type: LOGOUT });
export const changeId =(id) =>({type:CHANGEID , id:id});

// **** 초기상태 정의
const initialState = {
    isLogin: false,
    id: '',
  };

// **** 리듀서 작성
export default function logInOut(state = initialState, action) {
    switch (action.type) {
      case LOGIN:
          console.log('button 을 클릭했습니다.');
        return {
          ...state,
          isLogin: true
        };
      case LOGOUT:
        return {
          ...state,
          isLogin: false,
          id:''
        };
      case CHANGEID:
        return {
          ...state,
          id:action.id
        }
      default:
        return state;
    }
  }