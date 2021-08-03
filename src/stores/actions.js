import * as types from './mutations_type.js'
import {apiGetProduct, apiPostLogin, apiPostRegistor, apiPutMember,
    apiPostOneProduct, apiGetOrder, apiDeleteOrder, apiPostOrder, 
    apiPutOrder, apiCheckLogin, apiPostSearchProduct, apiPutCompleteOrder, 
    apiPostProductType} from '../api.js';

export const login = async ({commit},data) => {
    let result = await apiPostLogin(data).then(res => res).catch(function(err){
        if(err){
            return console.log(err);
        }
    });
    localStorage.setItem('token', result.headers.token);
    commit(types.LOGIN,result.data.result.status);
}

export const actionIncrease = ({ commit }) => {
    console.log('actionIncrease');
    commit(types.INCREASE);
  }
  
  export const actionDecrease = ({ commit }) => {
    console.log('actionDecrease');
    commit(types.DECREASE);
  }

