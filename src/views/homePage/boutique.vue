<template>
<li class="commodity-category">
      <h3>動漫精品</h3>
      <ul class = "commodity">          <!-- 商品列表 -->
          <commodity v-for="commodity in commoditys" :key="commodity.id" :commodityList="commodity" />
      </ul>
</li>
</template>

<script>
import commodity from '../../components/commodity.vue';
import {store} from '../../store.js';

export default{
    data(){
        return{
            commoditys:store.state.homeCommodity
        }
    },
    components:{
        commodity
    },
    async mounted(){
      let data = {productType:'boutique'}  
      await store.router.showProductType(data,10);
      this.commoditys = store.state.homeCommodity
    }
}
</script>

<style>

/*.commodity-category{
    display:flex;
}
.commodity-category h3{
    width:100px;
    font-size:25px;
    padding-top:30px;
    color:#FFECF5;
    background:yellow;
}
/*.commodity{
    //max-width:1000px;
    height:500px;
    width:1000px;
    height:500px;
    display:flex;
    flex-flow:wrap;
}*/

</style>