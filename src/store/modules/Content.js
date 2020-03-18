// 액션 타입 정의

const GOHOME = 'Content/GOHOME';
const CLICKSIDEBAR = 'Content/CLICKSIDEBAR';

// **** 액션 생섬함수 정의
export const goHome = () => ({ type: GOHOME });
export const clickSideBar = (tableName) => ({ type: CLICKSIDEBAR, tableName : tableName });



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
      case CLICKSIDEBAR:
        // SELECT FM_METADATA 
        let result = window.getFM_METADATA(action);
        let columnList = [];
        let columnOrder = [];
        // console.log('result의 결과는?');
        // console.log(result);

        for(let i =0;i<result.rows.length;i++){
          columnList.push({title : result.rows[i][1] , field : result.rows[i][1]});
          columnOrder.push(result.rows[i][1]);
        }
        // console.log(columnList);
        // console.log(columnOrder);

        action.columnOrder =columnOrder;
        
        let newDataList= [];
        let dataResult = window.getData(action);
        // console.log(dataResult);
        for(let i=0;i<dataResult.rows.length;i++){
          let newData={};
          for(let j=0;j<columnList.length;j++){
            newData[columnList[j].field] = dataResult.rows[i][j];
          }
          // console.log(newData);
          newDataList.push(newData);
        }
        // console.log(newDataList);
        return {
          ...state,
          home : false,
          tableName : action.tableName,
          columnList : columnList,
          dataList : newDataList
        };
    default:
      return state;
  }
}

