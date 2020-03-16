// 액션 타입 정의
const READ = 'Sidebar/READ';
// const CREATE = 'Sidebar/CREATE';
// const DELETE = 'Sidebar/DELETE';
// const UPDATE = 'Sidebar/UPDATE';
const CHECKEDMENU = 'Sidebar/CHECKEDMENU';

// **** 액션 생섬함수 정의
export const readSidebar = () => ({ type: READ ,admin:'N'});
// export const createSidebar = (todo) => ({ type: CREATE, todo:todo });
// export const deleteSidebar = (id) => ({ type: DELETE , id});
// export const updateSidebar = (id) =>({type:CHECKED , id:id});

export const checkedMenu = (id) =>({type : CHECKEDMENU,id : id});


// **** 초기상태 정의
const initialState = {
    // menuList : [],
    // only electron
    menuList : [],
    adminMenuList : [],
  };

const parseMenuList = (result)=>{
  let menuList =[];
  let temp ={};
  let map = {}, node,roots = [], i;
  for(let j =0;j<result.rows.length;j++){
    temp={};
    for(let i =0;i<result.metaData.length;i++){
      temp[result.metaData[i].name] = result.rows[j][i];
    }
    temp['show']=false;
    menuList.push(temp); 
  }
  for (i = 0; i < menuList.length; i += 1) {
    map[menuList[i].MENUID] = i; // initialize the map
    menuList[i].children = []; // initialize the children
  }
  for (i = 0; i < menuList.length; i += 1) {
    node = menuList[i];
    if (node.PARENTMENUID === null) {
      roots.push(node);
    } else {
      // if you have dangling branches check that map[node.parentId] exists
      menuList[map[node.PARENTMENUID]].children.push(node);
    }
  }
  return roots;
}

// **** 리듀서 작성
export default function Sidebar(state = initialState, action) {
  let menuList;
  let adminMenuList;
  switch (action.type) {
    case READ:
      menuList = parseMenuList (window.getmenuList(action) ) ;
      action.admin='Y';
      adminMenuList = parseMenuList (window.getmenuList(action) ) ;
      return {
        ...state,
        menuList : menuList,
        adminMenuList : adminMenuList
      };
    case CHECKEDMENU:
      menuList = JSON.parse(JSON.stringify(state.menuList));
      adminMenuList = JSON.parse(JSON.stringify(state.adminMenuList));

      for(let i=0;i<menuList.length;i++){
        if(action.id === menuList[i].MENUID){
          menuList[i].show=!menuList[i].show;
        }
      }
      for(let i=0;i<adminMenuList.length;i++){
        if(action.id === adminMenuList[i].MENUID){
          adminMenuList[i].show=!adminMenuList[i].show;
        }
      }
      return {
        ...state,
        menuList : menuList,
        adminMenuList : adminMenuList
      };
    default:
      return state;
  }
}

