<template>
<li class="commodity-category">
      <h3>漫畫輕小說</h3>
      <ul class = "commodity">          <!-- 商品列表 -->
          <commodity v-for="commodity in commoditys" :key="commodity.id" :commodityList="commodity" />
      </ul>
</li>
</template>

<script>
import commodity from '../../components/commodity.vue';
import {store} from '../../store.js';
import {mapGetters,mapActions} from 'vuex'

export default{
    data(){
        return{
            //commoditys:store.state.homeCommodity
        }
    },
    computed:{
        ...mapGetters({
            commoditys:'getHomeCommodity'
        })
    },
    methods:{
        ...mapActions([
            'showProductType'
        ])
    },
    components:{
        commodity
    },
    async mounted(){
      let data = {productType:'book'}
      this.showProductType(data);  
      /*await store.router.showProductType(data,10);
      this.commoditys = store.state.homeCommodity*/
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
    background:red;
}
/*.commodity{
    width:1060px;
    height:560px;
    display:flex;
    flex-flow:wrap;
}
.commodity>li{
    margin-right:10px;
}*/
</style>