import React, { Component } from 'react';
import {HashRouter,Route} from 'react-router-dom';
import Admin from './pages/Admin';
import Login from './pages/Login';
import User from './pages/User';
import Goods from './pages/Goods';
import Admins from './pages/Administartor';

// const Login = loadalbe(()=>import('./pages/Login'))
// const Admin = loadalbe(()=>import('./pages/Admin'))
class App extends Component{
  render(){
      return(
     <HashRouter>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' render ={()=>{
            return(
              <Admin>
                <Route path='/admin/user' component={User}></Route>
                <Route path='/admin/goods' component={Goods}></Route>
                <Route path='/admin/administartor' component={Admins}></Route>
              </Admin>
            )
          }}></Route>
        </HashRouter>
  );
}
}

export default App;
