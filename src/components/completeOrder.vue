<template>
<li class="completeOrder">
  <div class="header">
    <img :src="orderList.imgurl" />
    <h5>{{orderList.name}}</h5>
  </div>   
  <p>{{orderList.price}} 元</p>
  <p>{{orderList.number}}</p>
  <p>{{orderList.totel}} 元</p>
  <p>{{orderList.time}}</p>
</li>
</template>

<script>
import {store} from '../store.js';

export default{
    data(){
        return{
            time:'2021-05-13 12:00:00'
        }
    },
    methods:{   
    },
    watch:{
    },
    props:{
        orderList:{
            type:Object,
            required:true
        }
    },
}
</script>

<style>
.completeOrder{
    display:flex;
    flex-flow:wrap;
    align-items:center;
    margin:20px 0;
    padding:10px 0;
    background:#ACD6FF;
}
.completeOrder .header{
    width:40%;
    display:flex;
    align-items:center;
    padding-left:30px;
    //background:red;
}
.completeOrder .header img{
    max-width:100px;
    max-height:100px;
    border:1px solid #7B7B7B;
}
.completeOrder .header h5{
    width:100%;
    font-size:15px;
    text-align:center;
    color:#1212FF;
    //background:red;
}
.completeOrder>p{
    width:15%;
    font-size:15px;
    font-weight:bold;
    text-align:center;
    color:#FF0000;
    //background:green;
}
.completeOrder>p:last-child{
    padding:0 10px;
}
@media(max-width:750px){
    .completeOrder>p:last-child{
      padding:0;
    }
}
@media(max-width:600px){
    .completeOrder .header{
        width:100%;
        margin-bottom:10px;
    }
    .completeOrder .header h5{
        //text-align:left;
    }
    .completeOrder>p{
        width:25%;
    }
}
@media(max-width:420px){
    .completeOrder>p{
        font-size:14px;
    }
}
</style>