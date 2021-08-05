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

//顯示商品
export const showProduct = async ({commit}) => {
    let data = await apiGetProduct().then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });

    commit(types.SHOWPRODUCT,data);
}

//搜尋商品
export const searchProduct = async ({commit},searchName) => {
    let data = await apiPostSearchProduct(searchName).then(res => res.data.result).catch(function(err){
        if(err){
            console.log(err);
        }
    });

    commit(types.SEARCHPRODUCT,data);
}


//重置搜尋狀態
export const resetSearchStatus = ({commit}) => {
    commit(types.RESETSEARCHSTATUS);
}




