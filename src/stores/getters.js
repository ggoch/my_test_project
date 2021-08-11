export const getLoginStatus = state => {return state.status.login; }; //登入狀態
export const getRegistorStatus = state => { return state.status.registor; }; //註冊狀態
export const getCommodity = state => { return state.data.commodity; }; //商品資料
export const getSearchStatus = state => { return state.status.searchResult; }  //搜尋狀態
export const getSearchProductList = state => { return state.data.searchProductList; }; //搜尋商品列表
export const getHomeCommodity = state => { return state.data.homeCommodity; }; //首頁商品資料
export const getMemberInfo = state => { return state.data.memberInfo; };  //會員基本資料
export const getOrderList = state => { return state.data.orderList; }; //未完成訂單資料
export const getCompleteOrderList = state => { return state.data.completeOrderList; }; //已完成訂單資料
export const getMemberStatus = state => { return state.status.member; }; //會員資料狀態
export const getOrderStatus = state => { return state.status.order; };  //訂單狀態









