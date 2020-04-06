import React,{Component} from 'react';

class Login extends Component{
  constructor(){
    super()
    this.state={
      userName:'',
      passWord:''
    }
  }
  login(){
    console.log(this.setState)
  }
  render(){
    let {userName,passWord}=this.state;
    return(
      <div>
        用户名：<input type='text' value={userName} 
        onChange={(e)=>{this.setState({userName:e.target.value})}}></input>
        <br/>
        密码：<input type='password' value={passWord}
        onChange={(e)=>{this.setState({passWord:e.target.value})}}></input>
        <br/>
        <button onClick={this.login}>登录Go</button>
      </div>
    );
  }
}

export default Login;