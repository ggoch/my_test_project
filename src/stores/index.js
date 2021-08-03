import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations.js'
import * as getters from './getters.js'
import * as actions from './actions.js'
import {state} from './state.js'


Vue.use( Vuex );


const stores = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,

  // 嚴格模式，禁止直接修改 state

});
//  strict: true
export default stores