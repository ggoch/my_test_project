import * as types from './mutations_type.js'

export const mutations = {
    [types.LOGIN](state,status){
        state.status.loginTest = status;
    },
    [types.INCREASE] (state) {
        // 在 mutation 改變 state（只有 mutation 可以改變！）
        state.count += 1;
      },
      [types.DECREASE] (state) {
        state.count -= 1;
      },
}