export const getLoginStatus = state => {return state.status.login; }; //登入狀態
export const getRegistorStatus = state => { return state.status.registor; }; //註冊狀態
export const getCommodity = state => { return state.data.commodity; }; //商品資料
export const getSearchStatus = state => { return state.status.searchStatus; }  //搜尋狀態
export const getSearchProductList = state => { return state.data.searchProductList; }; //搜尋商品列表










//測試
export const getCount = state => { return state.count }