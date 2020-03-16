// 액션 타입 정의
const LOGIN = 'logInOut/LOGIN';
const LOGOUT = 'logInOut/LOGOUT';

const CHANGEID = 'logInOut/CHANGEID';
const CHANGENAME = 'logInOut/CHANGENAME';
const CHANGEHOST = 'logInOut/CHANGEHOST';
const CHANGEDBID = 'logInOut/CHANGEDBID';
const CHANGEDBPW = 'logInOut/CHANGEDBPW';
const CHANGEUSERID = 'logInOut/CHANGEUSERID';
const CHANGEUSERPW = 'logInOut/CHANGEUSERPW';

const SELECTEDDBCONFIG = 'logInOut/SELECTEDDBCONFIG';
const SAVEDBCONFIG = 'logInOut/SAVEDBCONFIG';
const DELETEDBCONFIG = 'logInOut/DELETEDBCONFIG';


const CONNECTTEST = 'logInOut/CONNECTTEST';

// **** 액션 생섬함수 정의
export const logIn = () => ({ type: LOGIN });
export const logOut = () => ({ type: LOGOUT });

export const changeId =(id) =>({type:CHANGEID , id:id});
export const changeName =(name) =>({type:CHANGENAME , name:name});
export const changeHost =(host) =>({type:CHANGEHOST , host:host});
export const changeDbId =(dbid) =>({type:CHANGEDBID , dbid:dbid});
export const changeDbPw =(dbpw) =>({type:CHANGEDBPW , dbpw:dbpw});
export const changeUserId =(userid) =>({type:CHANGEUSERID , userid:userid});
export const changeUserPw =(userpw) =>({type:CHANGEUSERPW , userpw:userpw});

export const selectedDbconfig = (id)=>({type: SELECTEDDBCONFIG,id:id});
export const saveDbconfig = () => ({type: SAVEDBCONFIG});
export const deleteDbconfig = ()=>({type:DELETEDBCONFIG});

// **** 액션 생섬함수 정의
export const connectTest = () => ({ type: CONNECTTEST });


// **** 초기상태 정의
const initialState = {
    //  dbconfigList : [],
    // only electron
    dbconfigList : window.getDbConfig(),    
    isLogin: false,
    id: '',
    name:'',
    host:'',
    dbid:'',
    dbpw:'',
    userid:'',
    userpw:'',
    dbConnectTest: null,
  };

// **** 리듀서 작성
export default function logInOut(state = initialState, action) {
  let dbconfigList;
  switch (action.type) {
    case LOGIN:
      window.host = state.host;
      window.dbid = state.dbid;
      window.dbpw = state.dbpw;
      return {
        ...state,
        isLogin: true
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        id: "",
        dbConnectTest : null
      };
    case CHANGEID:
      return {
        ...state,
        id: action.id
      };
    case CHANGENAME:
      return {
        ...state,
        name: action.name
      };
    case CHANGEHOST:
      return {
        ...state,
        host: action.host
      };
    case CHANGEDBID:
      return {
        ...state,
        dbid: action.dbid
      };
    case CHANGEDBPW:
      return {
        ...state,
        dbpw: action.dbpw
      };
    case CHANGEUSERID:
      return {
        ...state,
        userid: action.userid
      };
    case CHANGEUSERPW:
      return {
        ...state,
        userpw: action.userpw
      };
    case SAVEDBCONFIG:
      // dbconfigList = []
      dbconfigList = window.saveDbConfig(state);
      return {
        ...state,
        dbconfigList : dbconfigList,
        id:dbconfigList.length,
        dbConnectTest: null
      };
      case DELETEDBCONFIG:
        // dbconfigList = [];
        dbconfigList = window.deleteDbConfig(state);
        console.log('dbconfigList why?');
        console.log(dbconfigList);
        return {
          ...state,
          dbconfigList : dbconfigList,
          id: '',
          name: '',
          host: '',
          dbid: '',
          dbpw: '',
          userid: '',
          userpw: '',
          dbConnectTest: null
        };
    case SELECTEDDBCONFIG:
      // let dbconfigList = [];
      // only electron
      dbconfigList = window.getDbConfig();
      let id = "";
      let name = "";
      let host = "";
      let dbid = "";
      let dbpw = "";
      let userid = "";
      let userpw = "";
      if (action.id != null || action.id != undefined) {
        for (var idx in dbconfigList) {
          if (Number(action.id) === dbconfigList[idx].id) {
            id = dbconfigList[idx].id;
            name = dbconfigList[idx].name;
            host = dbconfigList[idx].host;
            dbid = dbconfigList[idx].dbid;
            dbpw = dbconfigList[idx].dbpw;
            userid = dbconfigList[idx].userid;
            userpw = dbconfigList[idx].userpw;
          }
        }
      }

      return {
        ...state,
        id: id,
        name: name,
        host: host,
        dbid: dbid,
        dbpw: dbpw,
        userid: userid,
        userpw: userpw,
        dbConnectTest: null
      };
      case CONNECTTEST:
      return {
        ...state,
        dbConnectTest: window.dbConnectTest(state)
      };
    default:
      return state;
  }
}

