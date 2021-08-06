import * as types from './mutations_type.js'

export const mutations = {
  [types.LOGIN](state,status){
      state.status.login = status;
  },
  [types.REGISTOR](state,status){
    state.status.registor.status = status.status;
    state.status.registor.err = status.err;
    state.status.registor.registerMember.name = status.registerMember.name;
  },
  [types.SHOWPRODUCT](state,data){
    let commodity = [];
    for(let i=0;i<data.length;i++){
        commodity.push(
            {
                id:data[i].id,
                name:data[i].name,
                imgurl:data[i].img,
                price:data[i].price,
                number:data[i].quantity,
                narrate:data[i].remark,
                time:data[i].create_date
            }
        );
    }

    state.data.commodity = commodity;
  },
  [types.SHOWNEWPRODUCT](state,data){
    let commodity = [];
    for(let i=data.length-1;i>=0;i--){
        commodity.push(
            {
                id:data[i].id,
                name:data[i].name,
                imgurl:data[i].img,
                price:data[i].price,
                number:data[i].quantity,
                narrate:data[i].remark,
                time:data[i].create_date
            }
        );
    }

    state.data.commodity = commodity;
  },
  [types.SHOWPRODUCTTYPE](state,data){
    let homeCommodity = [];
    for(let i=0;i<10;i++){
        homeCommodity.push(
            {
                id:data[i].id,
                name:data[i].name,
                imgurl:data[i].img,
                price:data[i].price,
                number:data[i].quantity,
                narrate:data[i].remark,
                time:data[i].create_date
            }
        );
    }
    state.data.homeCommodity = homeCommodity;
  },
  [types.SEARCHPRODUCT](state,data){
    let commodity = [];
    for(let i=0;i<data.length;i++){
      commodity.push(
          {
              id:data[i].id,
              name:data[i].name,
              imgurl:data[i].img,
              price:data[i].price,
              number:data[i].quantity,
              narrate:data[i].remark,
              time:data[i].create_date
          }
      );
    }

    if(commodity == ""){
        state.status.searchResult = "searchError";
    }else{
      state.status.searchResult = "searchSuccess";
      state.data.commodity = commodity;
    }
  },
  [types.RESETSEARCHSTATUS](state){
    state.status.searchStatus = "";
  },
  [types.CHECKLOGIN](state,result){
    if(result.status == "token錯誤"){
      state.status.login = "登入失敗";
    }else{
      state.status.login = result.status;
      state.data.memberInfo = {
        name:result.memberInfo.name,
        account:result.memberInfo.account,
        email:result.memberInfo.email
      };
    }
  },
  [types.GETORDERLIST](state,result){
    let list=[];
    for(let i=0;i<result.length;i++){
        if(result[i].is_complete == 1){
            continue;
        }

        list.push({
            orderID:result[i].order_id,
            productID:result[i].product_id,
            name:result[i].product_name,
            imgurl:result[i].product_img,
            totel:result[i].order_price,
            number:result[i].order_quantity,
            price:result[i].order_price / result[i].order_quantity
        });
    }
    state.data.orderList = list;
  },
  [types.DELETEORDER](state,result){
    state.status.order.delete = result.status;
  },
  [types.UPDATEORDER](state,result){
    state.status.order.update = result.status;
  },
  [types.COMPLETEORDER](state,result){
    state.status.order.complete = result;
  },
}