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
  renderIcon(icon){
  }
  renderItem(data){
    return data.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu key={item.key} title={(()=>{
            return(
              <span>
                {this.renderIcon(item.icon)}
                {item.title}
              </span>
            )
          })()}>
            {/* 如果里面还有2级 将渲染的方法在调用一遍 */}
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else{
        return(
        <Menu.Item key={item.key} path={item.path}>
          {this.renderIcon(item.icon)}
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