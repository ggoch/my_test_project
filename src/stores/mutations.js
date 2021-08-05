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
          state.status.searchStatus = "searchError";
      }else{
        state.status.searchStatus = "searchSuccess";
        state.data.commodity = commodity;
      }
    },
    [types.RESETSEARCHSTATUS](state){
      state.status.searchStatus = "";
    },
}