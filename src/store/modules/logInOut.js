// 액션 타입 정의
const LOGIN = 'logInOut/LOGIN';
const LOGOUT = 'logInOut/LOGOUT';
const CHANGEID = 'logInOut/CHANGEID';

const SELECTEDDBCONFIG = 'logInOut/SELECTEDDBCONFIG';

// **** 액션 생섬함수 정의
export const logIn = () => ({ type: LOGIN });
export const logOut = () => ({ type: LOGOUT });
export const selectedDbconfig = (id)=>({type: SELECTEDDBCONFIG,id:id});


export const changeId =(id) =>({type:CHANGEID , id:id});

// **** 초기상태 정의
const initialState = {
    //dbconfigList : [],
    // only electron
    dbconfigList : window.getDbConfig(),    
    isLogin: false,
    id: '',
    name:'',
    host:'',
    dbid:'',
    dbpw:'',
    userid:'',
    userpw:''
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
      case SELECTEDDBCONFIG:
        console.log('selected dbconfig 호출');
        //let dbconfigList = [];
        // only electron
        let dbconfigList = window.getDbConfig();
        console.log(Number(action.id));
        console.log(dbconfigList);
        let id;
        let name;
        let host;
        let dbid;
        let dbpw;
        let userid;
        let userpw;
        for (var idx in dbconfigList){
          console.log('result' + Number(action.id)===dbconfigList[idx].id);
          if(Number(action.id)===dbconfigList[idx].id){
            id=dbconfigList[idx].id;
            name= dbconfigList[idx].name;
            host= dbconfigList[idx].host;
            dbid= dbconfigList[idx].dbid;
            dbpw= dbconfigList[idx].dbpw;
            userid= dbconfigList[idx].userid;
            userpw= dbconfigList[idx].userpw;
          }
        }
        console.log(id +' '+ name + ' '+host+ ' '+dbid+ ' '+dbpw+ ' '+userid+ ' '+userpw);
        return {
          ...state,
          id: action.id,
          name:name,
          host:host,
          dbid:dbid,
          dbpw:dbpw,
          userid:userid,
          userpw:userpw
        }
      default:
        return state;
    }
  }