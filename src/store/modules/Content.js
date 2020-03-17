// 액션 타입 정의

const GOHOME = 'Content/GOHOME';

// **** 액션 생섬함수 정의
export const goHome = () => ({ type: GOHOME });



// **** 초기상태 정의
const initialState = {
  home :true,
  tableName : '',
  columnList :[],
  dataList : []

  };

// **** 리듀서 작성
export default function Content(state = initialState, action) {

  switch (action.type) {
    case GOHOME:
      return {
        ...state,
        home : true
      };
    default:
      return state;
  }
}

