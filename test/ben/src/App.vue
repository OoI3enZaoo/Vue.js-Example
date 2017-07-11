<template>
  <div id="app">
    <h2>My Number is >> {{this.$store.state.number}}</h2>
      <h2>It  >> {{EvenOrOdd}}</h2>

    <button type="button" name="button" v-on:click="IncreaseNumber({number})">+</button>
    <button type="button" name="button" v-on:click="DecreaseNumber({number})" >-</button>

    <input type= "number" v-model="number" v-on:keyup.enter = "IncreaseNumber({number})" placeholder="edit me">
  <p>number is: {{ number }}</p>
  </div>
</template>

<script>

import {mapGetters , mapActions} from 'vuex'
export default {
  name: '#app',
  data :{
    number : 0
  },
  computed :{
    ...mapGetters([
        'EvenOrOdd'
    ]),
    num (){
        return this.number;
    }
  },
  methods :{
    ...mapActions([
        'IncreaseNumber',
        'DecreaseNumber'
    ])
  }
}
</script>
