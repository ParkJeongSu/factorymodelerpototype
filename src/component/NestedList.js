import React from 'react';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from "@material-ui/core/Collapse";
import StarBorder from '@material-ui/icons/StarBorder';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import LabelIcon from '@material-ui/icons/Label';


const NestedList = (props)=>{
    const handleClick = (menuId)=>{
        //dispatch menuId
        props.checkedMenu(menuId);
    }
    return (
        <div>
            <List>
                <ListSubheader inset>{props.menuTitle}</ListSubheader>
            {props.menuList.map((item)=>{ return ( 
                <div key = {item.MENUID}>
                    <ListItem button onClick={(e)=>{handleClick(item.MENUID);}}>
                        <ListItemText primary={item.MENUNAME}/>
                    </ListItem>
                    <Collapse
                        component="li"
                        in={item.show}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List component="div" disablePadding>
                            {
                            item.children.map(
                                (sidebar)=>{return (
                                <ListItem button key={sidebar.MENUID}>
                                    <ListItemIcon>
                                        <LabelIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={sidebar.MENUNAME} />
                                </ListItem>
                            );}
                            )}
                        </List>
                    </Collapse>
                </div>
            );})}
            </List>
        </div>           
    )

};


// class NestedList extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             items : getItems().sidebarList.map(item =>({...item,show:true}))
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(menuId){
//         const { items } = this.state;
//         const nextState = items.map((item) => {
//         if (menuId !== item.menuId) return item;
//         return {
//             ...item,
//             show:!item.show,
//         }
//         });
//         this.setState({ items: nextState });
//     };
//     render(){
//         return (
//             <div>
//                 <List>
//                     <ListSubheader inset>Menu</ListSubheader>
//                 {this.state.items.map((item)=>{ return ( 
//                     <div key = {item.menuId}>
//                         <ListItem button onClick={(e)=>{this.handleClick(item.menuId);}}>
//                             <ListItemText primary={item.menuName}/>
//                         </ListItem>
//                         <Collapse
//                             component="li"
//                             in={item.show}
//                             timeout="auto"
//                             unmountOnExit
//                         >
//                             <List component="div" disablePadding>
//                                 {
//                                 item.subSidebarList.map(
//                                     (sidebar)=>{return (
//                                     <ListItem button key={sidebar.menuId}>
//                                         <ListItemIcon>
//                                             <LabelIcon />
//                                         </ListItemIcon>
//                                         <ListItemText primary={sidebar.menuName} />
//                                     </ListItem>
//                                 );}
//                                 )}
//                             </List>
//                         </Collapse>
//                     </div>
//                 );})}
//                 </List>
//             </div>           
//         )
//     }
// }

export default NestedList;


/**
 * backUp
 */


// import React from 'react';
// import List from '@material-ui/core/List';
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListSubheader from '@material-ui/core/ListSubheader';
// import Collapse from "@material-ui/core/Collapse";
// import StarBorder from '@material-ui/icons/StarBorder';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
// import LabelIcon from '@material-ui/icons/Label';

// function getItems() {
//     var json = {
//         sidebarList: [
//             {
//                 menuId : 0,
//                 menuName: "Factory",
//                 nodeLevel: "Root",
//                 parentMenuId: "",
//                 position: 0,
//                 menuType: "Normal",
//                 FM_METADATA: "",
//                 FM_POLICYMETADATA: "",
//                 adminFlag:"N",
//                 subSidebarList:[
//                     {
//                         menuId : 1,
//                         menuName: "Machine",
//                         nodeLevel: "child",
//                         parentMenuId: "",
//                         position: 0,
//                         menuType: "Normal",
//                         FM_METADATA: "",
//                         FM_POLICYMETADATA: "",
//                         adminFlag:"N"
//                       },
//                       {
//                         menuId : 2,
//                         menuName: "Port",
//                         nodeLevel: "child",
//                         nodeLevel: "",
//                         position: 0,
//                         menuType: "Normal",
//                         FM_METADATA: "",
//                         FM_POLICYMETADATA: "",
//                         adminFlag:"N"
//                       }
//                 ]
//             },
//             {
                
//                     menuId : 3,
//                     menuName: "Admin",
//                     nodeLevel: "Root",
//                     nodeLevel: "",
//                     position: 0,
//                     menuType: "Normal",
//                     FM_METADATA: "",
//                     FM_POLICYMETADATA: "",
//                     adminFlag:"Y",
//                     subSidebarList:[
//                         {
//                             menuId : 4,
//                             menuName: "FM_METADATA",
//                             nodeLevel: "child",
//                             nodeLevel: "",
//                             position: 0,
//                             menuType: "Normal",
//                             FM_METADATA: "",
//                             FM_POLICYMETADATA: "",
//                             adminFlag:"Y"
//                           }
//                     ]
//             }
//         ]
//     };
//     return json;
// }


// class NestedList extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             items : getItems().sidebarList.map(item =>({...item,show:true}))
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(menuId){
//         const { items } = this.state;
//         const nextState = items.map((item) => {
//         if (menuId !== item.menuId) return item;
//         return {
//             ...item,
//             show:!item.show,
//         }
//         });
//         this.setState({ items: nextState });
//     };
//     render(){
//         return (
//             <div>
//                 <List>
//                     <ListSubheader inset>Menu</ListSubheader>
//                 {this.state.items.map((item)=>{ return ( 
//                     <div key = {item.menuId}>
//                         <ListItem button onClick={(e)=>{this.handleClick(item.menuId);}}>
//                             <ListItemText primary={item.menuName}/>
//                         </ListItem>
//                         <Collapse
//                             component="li"
//                             in={item.show}
//                             timeout="auto"
//                             unmountOnExit
//                         >
//                             <List component="div" disablePadding>
//                                 {
//                                 item.subSidebarList.map(
//                                     (sidebar)=>{return (
//                                     <ListItem button key={sidebar.menuId}>
//                                         <ListItemIcon>
//                                             <LabelIcon />
//                                         </ListItemIcon>
//                                         <ListItemText primary={sidebar.menuName} />
//                                     </ListItem>
//                                 );}
//                                 )}
//                             </List>
//                         </Collapse>
//                     </div>
//                 );})}
//                 </List>
//             </div>           
//         )
//     }
// }

// export default NestedList;