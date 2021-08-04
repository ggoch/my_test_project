import * as types from './mutations_type.js'
import {apiGetProduct, apiPostLogin, apiPostRegistor, apiPutMember,
    apiPostOneProduct, apiGetOrder, apiDeleteOrder, apiPostOrder, 
    apiPutOrder, apiCheckLogin, apiPostSearchProduct, apiPutCompleteOrder, 
    apiPostProductType} from '../api.js';

//登入    
export const login = async ({commit},data) => {
    let result = await apiPostLogin(data).then(res => res).catch(function(err){
        if(err){
            return console.log(err);
        }
    });
    localStorage.setItem('token', result.headers.token);
    commit(types.LOGIN,result.data.result.status);
}


//註冊
export const registor = async ({commit},data) => {
    let result = await apiPostRegistor(data).then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });

    commit(types.REGISTOR,result);
}



//測試
export const actionIncrease = ({ commit }) => {
    console.log('actionIncrease');
    commit(types.INCREASE);
  }
  
  export const actionDecrease = ({ commit }) => {
    console.log('actionDecrease');
    commit(types.DECREASE);
  }

