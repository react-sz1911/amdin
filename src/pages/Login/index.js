import React, { Component } from 'react';
import api from '../../api/admin.js'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import style from './index.module.less'

class Login extends Component {
  login=()=>{
    let {validateFields} = this.props.form
    validateFields((err, data) => {
      if(err){
        message.error('输入有误请确认后重试')
      } else {
        api.login(data).then((res) => {
          if (res.code === 404) {
            message.error('用户名密码错误')
          }else{
            localStorage.setItem('token', res.token)
            message.success('登录成功，正在跳转...', 3, () => {
              this.props.history.replace('/admin')
            })
          }
        })
      }
    })
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={style['login-box']}>
        <div className={style['login-form']}>
          {/* 用户名 */}
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ requied: true, message: '用户名必须存在' },
              { min: 3, message: '用户名最小长度3位' },
              { max: 9, message: '用户名最大长度9位' }]
            })(
            <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            />
            )}
          </Form.Item>
          {/* 密码 */}
          <Form.Item>
            {getFieldDecorator('passWord', {
              rules: [{ requied: true, message: '密码必须输入' },
              { min: 3, message: '密码最小长度3位' },
              { max: 9, message: '密码最大长度9位' }]
            })(
              <Input
                prefix={<Icon type="eye-invisible" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="PassWord"
              />
            )}
          </Form.Item>
          {/* 记住和提交 */}
          <Form.Item>
          <Checkbox>Remember me</Checkbox>

          <span className="login-form-forgot" >
            Forgot password
          </span>

          <Button type="primary" onClick={this.login} className="login-form-button">
            Log in
          </Button>
          Or <span >register now!</span>
        </Form.Item>

        </div>
      </div>
    )
  }
}

export default Form.create()(Login);