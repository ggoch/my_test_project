<template>
  <div id="product-new">
    <div class="container">
      <div class="product-main">
        <productHeader @updateProduct="updateProduct" :productHeader="productHeader" />
      </div>

      <div class="product-list">
        <ul>
          <commodity v-for="commodity in commoditys" :key="commodity.id" :commodityList="commodity" />
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import commodity from '../components/commodity.vue';
import productHeader from '../components/productHeader.vue';
import {store} from '../store.js';

export default{
    data(){
        return{
            commoditys:store.state.commodity,
            productHeader:store.state.recommend
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
      await store.router.showNewProduct();
      this.commoditys = store.state.commodity
    }
}
</script>
<style>
#product-new .product-list{
  background:green;
  margin:20px 0;
  //padding:0 150px;
}
.product-list ul{
  width:1070px;
  max-width:100%;
  display:flex;
  flex-flow:wrap;
  justify-content:center;
  margin:20px auto;
  //padding-left:10px;
}
.product-list ul li{
  margin-right:10px;
  margin-top:10px;
}
.product-list ul .Adjustment{
  max-width:200px;
  width:100%;
  margin:10px 10px 0 0;
}
@media(max-width:550px){
  .product-list ul .Adjustment{
    max-width:150px;
  }
}
@media(max-width:420px){
  .product-list ul li{
    margin-right:3px;
  }
}
</style>