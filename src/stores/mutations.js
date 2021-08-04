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
    [types.INCREASE] (state) {
        // 在 mutation 改變 state（只有 mutation 可以改變！）
        state.count += 1;
      },
      [types.DECREASE] (state) {
        state.count -= 1;
      },
}