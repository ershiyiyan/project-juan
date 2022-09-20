import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)


const mean = {
  namespaced: true,
  actions:{},
  mutations:{
    JIA(state){
      state.b = state.b + 1
    }
  },
  state:{
    a:'1',
    b:2
  },
  getters:{}
}

export default new Vuex.Store({
  modules:{
    mean
  }
})