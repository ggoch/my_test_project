<template>
<div id="shapping">
  <div class="container">
    <div class="car">
      <div class="car-header">
        <p>商品</p>
        <p>單價</p>
        <p>數量</p>
        <p>總計</p>
        <p>操作</p>
      </div>
      <div class="car-main">
        <ul v-if="carAir == false">
          <order @refresh="refreshOrderList" v-for="order in orders" :key="order.id" :orderList="order" />
        </ul>
        <div class="air" v-if="carAir == true">
          <h3>購物車現在是空的</h3>
          <P>現在去賣場逛逛吧 <router-link to="/">返回首頁</router-link></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import order from '../../components/shoppingCar.vue';
import {store} from '../../store.js';
import {mapGetters,mapActions} from 'vuex';

export default{
  data(){
    return{
      carAir:false
    }
  },
  computed:{
    ...mapGetters({
      orders:'getOrderList'
    })
  },
  methods:{
    ...mapActions([
      'orderList'
    ]),
    async refreshOrderList(){
      await this.orderList();
      if(this.orders == ""){
        this.carAir = true;
      }
      //this.$forceUpdate();
    }
  },
  components:{
    order
  },
  async mounted(){
    await this.refreshOrderList();

  },
}
</script>

<style>
.car-header{
  display:flex;
  //justify-content:space-around;
  margin:20px 0;
  padding:10px;
  background:#B9B9FF;
}
.car-header p{
  width:15%;
  font-size:17px;
  font-weight:bold;
  text-align:center;
  color:#FBFBFF;
  //background:red;
}
.car-header p:first-child{
  width:40%;
  padding-left:40px;
  text-align:left;
  //background:green;
}
.car-main .air{
  width:400px;
  max-width:100%;
  margin:20px auto;
  display:flex;
  flex-flow:column;
  align-items:flex-start;
  line-height:50px;
}
.car-main .air a{
  color:blue;
}
@media(max-width:600px){
  .car-header{
    display:none;
  }
}
</style>