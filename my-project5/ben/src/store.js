import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store = new Vuex.Store({

  state : {
    orderName: []
  },
  getters : {
      orderName : state => state.orderName,
      getOrder :state => state.orderName.shift()

  },
  mutations :{
      addOrder : (state,order)  => state.orderName.push(order),

  },
  actions :{
      AddOrder : ({commit},order) => commit('addOrder',order),
      doOrder : ({commit}) => commit('DoOrder')
  }
});
