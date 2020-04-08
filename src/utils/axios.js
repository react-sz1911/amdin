import axios from 'axios' 

// 拦截器
axios.interceptors.request.use(function(config){
//  let token =localStorage.getItem('token')||'no token'

//  config.headers.authorization = 'Bearer' + token
//  config.log(config)
 return config;
},function(error){
  return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
  // let{code,msg}=response.data
  // console.log('响应拦截器',code,msg)
  // if(code ===402){

  //   let action = actionCreator.changeTokenModal(true)
  //   store.dispatch(action)
  // }
  return response.data;
},function(error){
  return Promise.reject(error);
});
export default axios 