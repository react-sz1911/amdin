import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Menu } from 'antd';
import menuList from './menulist'

const { SubMenu } = Menu;

function handleClick(e) {
  console.log(e)
  let {path} = e.item.props 
  this.props.history.replace(path)
}
class CustomNav extends Component {
  renderItem(data){
    return data.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu key={item.key} title={(()=>{
            return(
              <span>
                {item.title}
              </span>
            )
          })()}>
            {/* 2级递归*/}
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else{
        // 无children 
        return(
        <Menu.Item key={item.key} path={item.path}>

          {item.title}
        </Menu.Item>
        )
      }
    })
  }
  render(){
    return(
    <Menu onClick={handleClick.bind(this)} style={{ width: 200 }} mode="vertical" theme='light'>
      {this.renderItem(menuList)}
    </Menu>
    )
  }
}
 
export default withRouter(CustomNav);