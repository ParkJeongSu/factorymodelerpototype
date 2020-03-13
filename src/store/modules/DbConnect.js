// 액션 타입 정의
const CONNECTTEST = 'DbConnect/CONNECTTEST';

// **** 액션 생섬함수 정의
export const connectTest = () => ({ type: CONNECTTEST });


// **** 초기상태 정의
const initialState = {
    dbConnectTest: null,
  };

// **** 리듀서 작성
export default function DbConnect(state = initialState, action) {
    switch (action.type) {
      case CONNECTTEST:
          return {
            ...state,
            dbConnectTest: true
          };
      default:
        return state;
    }
  }