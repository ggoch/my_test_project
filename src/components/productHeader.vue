<template>
  <div class="product-header">
        <div class="product-type">
          <label class="typeMenu" for="typeMenu-switch">
            <img src="../assets/icon/menu.png" />
          </label>
          <input type="checkbox" id="typeMenu-switch" />
          <ul>
            <li @click="showType('totel')"><p>公仔</p></li>
            <li @click="showType('game')"><p>遊戲</p></li>
            <li @click="showType('boutique')"><p>動漫精品</p></li>
            <li @click="showType('book')"><p>漫畫輕小說</p></li>
          </ul>
        </div>
        <div class="recommend">
          <div class="hot">
            <h3>熱銷商品</h3>
            <div class="product">
              <img :src="productHeader.hot.imgurl" />
              <div>
                <h4 class="name">{{productHeader.hot.name}}</h4>
                <p class="narrate">{{productHeader.hot.narrate}}</p>
                <p class="price">{{productHeader.hot.price}}</p> 
              </div>
            </div>
          </div>
          <div class="new">
            <h3>新品推薦</h3>
            <div class="product">
              <img :src="productHeader.new.imgurl" />
              <div>
                <h4 class="name">{{productHeader.new.name}}</h4>
                <p class="narrate">{{productHeader.new.narrate}}</p>
                <p class="price">{{productHeader.new.price}}</p> 
              </div>
            </div>  
          </div>
        </div> 
  </div>
</template>

<script>
import {store} from '../store.js';

export default{
    data(){
        return{
        }
    },
    methods:{
      async showType(type){
        let data = {
          productType:type
        };
        await store.router.showProductType(data);
        this.$emit('updateProduct');
        if(this.$route.path == '/product'){
        this.$router.replace({path:'/supplierAllBack'})
      }else{
        this.$router.push({path:'/product'});
      }
      }
    },
    props:{
        productHeader : {
            type:Object,
            required:true
        }
    },
}
</script>

<style>
.product-header {
    display:flex;
    max-width:100%;
    width:1000px;
    margin:50px auto;
    //background:red;
}
.product-type{
    max-width:20%;
    width:200px;
    //flex:1 1 200px;
    //max-height:200px;
    //height:200px;
    //flex:0 0 200px;
}
.product-type .typeMenu,
.product-type input[type="checkbox"]{
  display:none;
}
.product-type ul{  
    display:flex;
    flex-flow:column;
    margin-right:20px;
    background:#66B3FF;
}
.product-type li{
    display:flex;
    border:1px solid #ADADAD;
    transition:0.3s;
}
.product-type li:hover{
  cursor:pointer;
  background:#fff;
}
.product-type li p{
    //width:200px;
    height:50px;
    margin-left:10px;
    line-height:50px;
    font-size:18px;
    color:#fff;
    transition:0.3s;
}
.product-type li:hover p{
  color:#000;
}
.recommend{
    width:800px;
    max-width:80%;
    //flex:2 4 800px;
    //height:208px;
    display:flex;
    border:1px solid blue;
    padding:10px 0;
}
.recommend>div{
    width:400px;
    max-width:50%;
    //flex:1 1;
    //height:208px;
    padding:0 20px;
}
.recommend>div:first-child{
    border-right:1px solid blue;
}
.recommend .product{
    display:flex;
    justify-content:space-around;
    padding-right:20px;
}
.recommend .product img{
    max-width:150px;
    max-height:150px;
}
.recommend .product div {
    display:flex;
    flex-flow:column;
    align-items:flex-start;
    justify-content:space-around;
}
.recommend .product div h4{
  font-size:18px;
}
.recommend .product div p{
  font-size:16px;
}
@media screen and (min-width:600px) and (max-width:900px){  /*商品頁面標頭rwd*/
  .product-type{
    //max-width:20%;
    //height:170px;
  }
  .product-type li p{
    font-size:16px;
    height:calc(170px/4);
  }
  .recommend>div{
    //height:178px;
  }
  .recommend .product div h4{
    font-size:16px;
  }
  .recommend .product div p{
    font-size:14px;
  }
  .recommend .product img{
    max-width:120px;
    max-height:120px;
  }
}
@media(max-width:600px){
  .recommend{
    max-width:100%;
    flex-flow:column;
    order:-1;
  }
  .recommend>div{
    max-width:100%;
    width:100%;
    padding:10px 20px;
    //background:green;
  }
  .recommend>div:first-child{
    border-right:none;
    border-bottom:1px solid blue;
  }
  .product-header{
    flex-flow:column;
    max-width:100%;
    margin:10px 0;
    align-items:center;
  }
  .product-type {
    max-width:100%;
    width:100%;
    background:#0072E3;
    position:relative;
  }
  .product-type .typeMenu{
    display:flex;
    align-item:center;
    padding:10px;
  }
  .product-type .typeMenu:hover{
    cursor:pointer;
  }
  .product-type>input:checked ~ ul{
    transform:translateX(0);
  }
  .product-type ul{
    position:absolute;
    transform:translateX(-100%);
    transition:0.3s;
  }
  .product-type li p{
    margin-left:0;
  }
}
@media(max-width:400px){
  .recommend .product div h4{
    font-size:16px;
  }
  .recommend .product div p{
    font-size:14px;
  }
  .recommend .product img{
    max-width:120px;
    max-height:120px;
  }
}
</style>