import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state :{
    number : 0
  },
  getters :{
      EvenOrOdd : state => state.number % 2 === 0 ? 'even'  : 'odd'
  },
  mutations: {
      IncreaseNumber : (state,amount) => state.number += amount,
      DecreaseNumber : (state,amount)  => state.number -= amount
  },
  actions: {

      IncreaseNumber: ({commit},{number}) => commit('IncreaseNumber',Number.parseInt(number)),
      DecreaseNumber: ({commit},{number}) => commit('DecreaseNumber',Number.parseInt(number))


  }

})
