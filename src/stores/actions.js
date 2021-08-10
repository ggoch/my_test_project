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

//顯示最新商品
export const showNewProduct = async ({commit}) => {
    let data = await apiGetProduct().then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });

    commit(types.SHOWNEWPRODUCT,data);
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

//顯示首頁商品
export const showProductType = async ({commit},datas) => {
    let data = await apiPostProductType(datas).then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });

    commit(types.SHOWPRODUCTTYPE,data);
}

//確認登入狀態
export const checkLogin = async ({commit}) => {
    let result = await apiCheckLogin().then(res => res.data.result).catch(function(err){
        if(err){
            console.log(err);
        }
    });

    commit(types.CHECKLOGIN,result);
}

//獲取未完成訂單
export const orderList = async ({commit}) => {
    let result = await apiGetOrder().then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });

    commit(types.GETORDERLIST,result)
}

//刪除訂單
export const deleteOrder = async ({commit},data) => {
    alert("test");
    let result = await apiDeleteOrder(data).then(res => res.data.result).catch(function(err){
        if(err){
            console.log(err);
        }
    });

    commit(types.DELETEORDER,result);
}

//修改商品數量
export const updateOrder = async ({commit},data) => {
    alert("test");
    let result = await apiPutOrder(data).then(res => res.data.result).catch(function(err){
        if(err){
            console.log(err);
        }
    });

    commit(types.UPDATEORDER,result);
}

//完成訂單
export const completeOrder = async ({commit},data) => {
    let result = await apiPutCompleteOrder(data).then(res => res.data.result.status).catch(function(err){
        if(err){
            console.log(err);
        }
    });

    commit(types.COMPLETEORDER,result);
}

//獲取已完成訂單
export const completeOrderList = async ({commit},data) => {
    let result = await apiGetOrder().then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });

    commit(types.GETCOMPLETEORDERLIST,result);
}



