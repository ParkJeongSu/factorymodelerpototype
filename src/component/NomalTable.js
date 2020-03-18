import React,{useState} from 'react';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';

const NomalTable = (props)=>{
  return (
    <MaterialTable
      icons ={Icon}
      title="Editable Preview"
      columns={props.columnList}
      data={props.dataList}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
              // const newDataList = this.state.data.concat(newData);
              // this.setState({...this.state,data : newDataList}, ()=>resolve('한건이 정상적으로 들어갔습니다.'));
              resolve();
          }).then((resolve)=>{ alert(resolve) }).catch((reject)=>{alert(reject)}),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            // let newDataList = JSON.parse(JSON.stringify(this.state.data));
            // const index = this.state.data.indexOf(oldData);
            // newDataList[index] = newData;
            // this.setState({...this.state,data : newDataList},()=>resolve('한건이 정상적으로 수정됨'));
            resolve();
          }).then((resolve)=>{ alert(resolve); }).catch((reject)=>{alert(reject);}),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
              // const index = this.state.data.indexOf(oldData);
              // let newDataList = JSON.parse(JSON.stringify(this.state.data));
              // newDataList.splice(index,1);
              // this.setState({...this.state,data : newDataList},()=>resolve('한건이 정상적으로 삭제됨'));
              resolve();
          }).then((resolve)=>{alert(resolve);}).catch((reject)=>{ alert(reject); }),
      }}
      options={{
        actionsColumnIndex: -1,
        exportButton: true
      }}
      actions={[
        {
          icon: 'vertical_align_top',
          tooltip: 'Import',
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row")
        }
      ]}
    />
  )
}
export default NomalTable;



// class NomalTable extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         columns : [],
//         data : []
//       }

//       {
//         columns: [
//           { title: 'Name', field: 'name' },
//           { title: 'Surname', field: 'surname' },
//           { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//           {
//             title: 'Birth Place',
//             field: 'birthCity',
//             lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//           },
//           { title: 'test1', field: 'test1', type: 'numeric' },
//           { title: 'test2', field: 'test2', type: 'numeric' },
//           { title: 'test3', field: 'test3', type: 'numeric' },
//           { title: 'test4', field: 'test4', type: 'numeric' },
//           { title: 'test5', field: 'test5', type: 'numeric' },
//           { title: 'test5', field: 'test5', type: 'numeric' }
//         ],
//         data: [
//           { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 ,test1: 20,test2: 20,test3: 20,test4: 20,test5: 20},
//           { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 ,test1: 20,test2: 20,test3: 20,test4: 20,test5: 20},
//         ]
//       }
//     }
  
//     render() {
//       return (
//         <MaterialTable
//           icons ={Icon}
//           title="Editable Preview"
//           columns={this.state.columns}
//           data={this.state.data}
//           editable={{
//             onRowAdd: newData =>
//               new Promise((resolve, reject) => {
//                   const newDataList = this.state.data.concat(newData);
//                   this.setState({...this.state,data : newDataList}, ()=>resolve('한건이 정상적으로 들어갔습니다.'));
//               }).then((resolve)=>{ alert(resolve) }).catch((reject)=>{alert(reject)}),
//             onRowUpdate: (newData, oldData) =>
//               new Promise((resolve, reject) => {
//                 let newDataList = JSON.parse(JSON.stringify(this.state.data));
//                 const index = this.state.data.indexOf(oldData);
//                 newDataList[index] = newData;
//                 this.setState({...this.state,data : newDataList},()=>resolve('한건이 정상적으로 수정됨'));
//               }).then((resolve)=>{ alert(resolve); }).catch((reject)=>{alert(reject);}),
//             onRowDelete: oldData =>
//               new Promise((resolve, reject) => {
//                   const index = this.state.data.indexOf(oldData);
//                   let newDataList = JSON.parse(JSON.stringify(this.state.data));
//                   newDataList.splice(index,1);
//                   this.setState({...this.state,data : newDataList},()=>resolve('한건이 정상적으로 삭제됨'));
//               }).then((resolve)=>{alert(resolve);}).catch((reject)=>{ alert(reject); }),
//           }}
//           options={{
//             actionsColumnIndex: -1,
//             exportButton: true
//           }}
//           actions={[
//             {
//               icon: 'vertical_align_top',
//               tooltip: 'Import',
//               isFreeAction: true,
//               onClick: (event) => alert("You want to add a new row")
//             }
//           ]}
//         />
//       )
//     }
//   }
// export default NomalTable;
