<template>
  <div id="product">
    <div class="container">
      <div class="product-title">
        <productHeader @updateProduct="updateProduct" :productHeader="productHeader" />
      </div>
      <div class="product-list">
        <ul v-if="air == false">
          <commodity v-for="commodity in commoditys" :key="commodity.id" :commodityList="commodity" />
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
        </ul>
      </div>
      <div v-if="air == true" class="noProduct">
        <p>抱歉沒有此商品</p>
      </div>
    </div>
  </div>
</template>
<script>
import commodity from '../components/commodity.vue';
import productHeader from '../components/productHeader.vue';
import {store} from '../store.js';

export default {
  data(){
    return{
      commoditys:store.state.commodity,
      productHeader:store.state.recommend,
      air:false
    }
  },
  methods:{
    updateProduct(){
      store.state.searchProductList = store.state.homeCommodity;
    }
  },
  components:{
    commodity,
    productHeader
  },
  async mounted(){
    if(store.state.searchProductList == ''){
      if(store.status.searchStatus == "error"){
        this.air = true;
      }else{
        await store.router.showProduct();
        this.commoditys = store.state.commodity;
      }
    }else{
      this.commoditys = store.state.searchProductList;
    }
  }
}
</script>
<style>
/*#product .product-list{
  //background:blue;
  //padding:0 150px;
  margin:20px 0;
}
.product-list ul{
  width:1070px;
  display:flex;
  flex-flow:wrap;
  margin:auto;
  padding-left:10px;
}*/
.noProduct{
  width:1000px;
  margin:20px auto;
  //background:green;
}
.noProduct p{
  text-align:center;
  font-size:20px;
}
</style>