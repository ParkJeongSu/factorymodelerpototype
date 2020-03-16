// 액션 타입 정의
const READ = 'Sidebar/READ';
// const CREATE = 'Sidebar/CREATE';
// const DELETE = 'Sidebar/DELETE';
// const UPDATE = 'Sidebar/UPDATE'

// **** 액션 생섬함수 정의
export const readSidebar = () => ({ type: READ ,admin:'N'});
// export const createSidebar = (todo) => ({ type: CREATE, todo:todo });
// export const deleteSidebar = (id) => ({ type: DELETE , id});
// export const updateSidebar = (id) =>({type:CHECKED , id:id});


// **** 초기상태 정의
const initialState = {
    // menuList : [],
    // only electron
    menuList : [],
    adminMenuList : [],
  };

const parseMenuList = (result)=>{
  console.log(result);
  let menuList =[];
  let temp ={};
  for(let j =0;j<result.rows.length;j++){
    temp={};
    for(let i =0;i<result.metaData.length;i++){
      temp[result.metaData[i].name] = result.rows[j][i];
    } 
    menuList.push(temp); 
  }


  
  return menuList;
}

// **** 리듀서 작성
export default function Sidebar(state = initialState, action) {
  let menuList;
  let adminMenuList;
  switch (action.type) {
    case READ:
      menuList = parseMenuList (window.getmenuList(action) ) ;
      // console.log(store);
      return {
        ...state,
        menuList
      };
    default:
      return state;
  }
}

