<template>
<li class = "commodity-list">
  <h4 class = "name">{{commodityList.name}}</h4>
  <router-link :to="{path:'/product_page'}" @click.native="checkID" target="_blank" rel="noreferrer noopener"><img :src = "commodityList.imgurl" alt="" /></router-link>
  <p class = "narrate"><router-link :to="{path:'/product_page'}" @click.native="checkID" target="_blank" rel="noreferrer noopener">{{commodityList.narrate}}</router-link></p>
  <p class = "price">價格: {{commodityList.price}}</p>
</li>
</template>

<script>

export default{
    data(){
        return{
            id:this.commodityList.id
        }
    },
    methods:{
        checkID(){
            localStorage.setItem("productID", this.id);
        }
    },
    props:{
        commodityList : {
            type:Object,
            required:true
        }
    },
}
</script>

<style>
.commodity-list{
    max-width:200px;
    width:100%;
    //height:280px;
    display:flex;
    flex-flow:column;
    align-items:center;
    justify-content:space-between;
    overflow:hidden;
    text-align:left;
    //border:1px solid #9D9D9D;
    border:1px solid #D0D0D0;
    background:#fff;
}
.commodity-list h4{
    text-align:center;
    width:100%;
    background:#46A3FF;
    overflow:hidden;
    white-space:nowrap;
    color:#fff;
}
.commodity-list img{
    margin-top:10px;
    max-width:150px;
    max-height:150px;
    border:2px solid #D0D0D0;
}
.commodity-list p{
    width:150px;
    line-height:17px;
    font-size:15px;
}
.commodity-list p.narrate{
    padding-top:3px;
    height:50px;
    overflow:hidden;
    transition:0.3s;
}
.commodity-list p.narrate:hover{
    text-decoration:underline;
    cursor:pointer;
}
.commodity-list p a{
    color:#2828FF;
}
@media(max-width:550px){      /*commodity組件rwd*/
    .commodity-list{
        max-width:150px;
    }
    .commodity-list h4{}
    .commodity-list img{
        max-width:120px;
        max-height:120px;
    }
    .commodity-list p{
        width:120px;
        line-height:14px;
        font-size:12px;
    }
}
</style>


