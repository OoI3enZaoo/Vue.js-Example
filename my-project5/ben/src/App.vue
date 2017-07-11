<template>
  <div id="app">
    <div>
    <h2 v-if="cook !== ''">กำลังทำอาหาร >>  {{cook}}</h2>
    <h2 v-else>พ่อครัวว่าง</h2>
      <ul>
        <h4>คิวรายการอาหาาร</h4>
        <li v-for = "order in orderName">{{order}} </li>
      </ul>
      <input type="text" placeholder = "กรอกรายการอาหาร" v-model ="food" v-on:keyup.enter ="AddOrder(this.event.target.value),this.event.target.value=''"> <button type="button" name="button" v-on:click = "AddOrder(food)" >เพิ่มรายการอาหาร</button>
</div>
  </div>
</template>


<script type="text/javascript">

import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      food : 'be',
      cook : 'be'
    }

  },
  computed :{
      ...mapGetters([
      'getOrder','orderName'
      ])

  },
  mounted(){
    this.chef()
  },
  methods :{
    ...mapActions([
      'AddOrder',
      'doOrder'
    ]),
    chef(){
      var res = this;

      if(res.orderName.length > 0){
        res.cook = res.getOrder
        console.log(this.cook);

      }else{
        res.cook = ''
      }
      setTimeout(res.chef,2000)

    }
  }
}
</script>
