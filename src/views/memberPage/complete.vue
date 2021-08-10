<template>
<div id="completeOrder">
  <div class="container">
    <div class="complete">
      <div class="complete-header">
        <p>商品</p>
        <p>單價</p>
        <p>數量</p>
        <p>總計</p>
        <p>訂單完成時間</p>
      </div>
      <div class="complete-main">
        <ul v-if="carAir == false">
          <completeOrder @refresh="refreshOrderList" v-for="order in completeOrders" :key="order.id" :orderList="order" />
        </ul>
        <div class="air" v-if="carAir == true">
          <h3>沒有已完成的訂單</h3>
          <P>現在去賣場逛逛吧 <router-link to="/">返回首頁</router-link></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import completeOrder from '../../components/completeOrder.vue';
import {store} from '../../store.js';
import {mapGetters,mapActions} from 'vuex'

export default{
  data(){
    return{
      //completeOrders:store.state.completeOrderList,
      carAir:false
    }
  },
  computed:{
    ...mapGetters({
      completeOrders:'getCompleteOrderList'
    })
  },
  methods:{
    ...mapActions([
      'completeOrderList'
    ]),
    async refreshOrderList(){
      /*await store.router.getCompleteOrderList();
      this.completeOrders = store.state.completeOrderList;*/
      await this.completeOrderList();
      if(this.completeOrders == ""){
        this.carAir = true;
      }
      this.$forceUpdate();
    }
  },
  components:{
    completeOrder
  },
  async mounted(){
    await this.refreshOrderList();
    /*await store.router.getOrderList();
    this.orders = store.state.orderList;
    if(this.orders == ""){
      this.carAir = true;
    }*/
  },
}
</script>

<style>
.complete-header{
  display:flex;
  //justify-content:space-around;
  margin:20px 0;
  padding:10px;
  background:#B9B9FF;
}
.complete-header p{
  width:15%;
  //margin:15px;
  font-size:17px;
  font-weight:bold;
  text-align:center;
  color:#FBFBFF;
  //background:red;
}
.complete-header p:first-child{
  width:40%;
  padding-left:40px;
  text-align:left;
  //background:green;
}
complete-main .air{
  width:400px;
  max-width:100%;
  margin:20px auto;
  display:flex;
  flex-flow:column;
  align-items:flex-start;
  line-height:50px;
}
complete-main .air a{
  color:blue;
}
@media(max-width:600px){
  .complete-header p:first-child{
    display:none;
  }
  .complete-header p{
    width:25%;
  }
}
@media(max-width:420px){
  .complete-header p{
    font-size:14px;
  }
}
</style>