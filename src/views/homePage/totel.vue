<template>
<div class="commodity-category">
      <h3>公仔</h3>
      <ul class = "commodity">          <!-- 商品列表 -->
          <commodity v-for="commodity in commoditys" :key="commodity.id" :commodityList="commodity"/>
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
          <div class="Adjustment"></div>
      </ul>
</div>
</template>

<script>
import commodity from '../../components/commodity.vue';
import {store} from '../../store.js';
import {mapGetters,mapActions} from 'vuex'

export default{
    data(){
        return{
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
      let data = {productType:'totel'}
      this.showProductType(data);  
    }
}
</script>

<style>

.commodity-category{
    display:flex;
}
.commodity-category h3{
    width:100px;
    font-size:25px;
    padding-top:30px;
    color:#FFECF5; 
    background:#FFC1E0;
    display:none;
}
.commodity{
    max-width:1050px;
    //width:1060px;
    width:100%;
    //height:500px;
    display:flex;
    justify-content:center;
    align-item:center;
    flex-flow:wrap;
}
.commodity>li{
    margin-right:10px;
    margin-bottom:10px;
}
.commodity .Adjustment{
  max-width:200px;
  width:100%;
  margin:0 10px 10px 0;
}
@media screen and (min-width:550px) and (max-width:1050px){  /*首頁商品區塊rwd*/
    .commodity-category h3{
        margin-left:50px;
    }
}
@media(max-width:550px){
    .commodity{
        //justify-content:center;
        //padding-left:10px;     
    }
    .commodity-category h3{
        display:none;
    }
    .commodity>li{
        margin-right:5px;
    }
    .commodity .Adjustment{
        max-width:150px;
    }
}
</style>