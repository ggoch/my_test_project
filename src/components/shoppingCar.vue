<template>
<li class="orderList">
  <div class="header">
    <img :src="orderList.imgurl" />
    <h5>{{orderList.name}}</h5>
  </div>
  <p>{{orderList.price}} 元</p>
  <div class="change-number">
    <input @change="updateOrder" v-model="orderList.number" />
  </div>   
  <p class="totel">{{orderList.totel}} 元</p>
  <div class="operating">
    <p @click="deleteOrder">刪除</p>
  </div>
  <div class="checkout">
    <p>總計: {{orderList.totel}}</p> 
    <button @click="completeOrder">結帳</button>
  </div>
</li>
</template>

<script>
import {store} from '../store.js';

export default{
    data(){
        return{
            number:this.orderList.number
        }
    },
    methods:{
        async deleteOrder(){
            let productID = String(this.orderList.productID);
            let orderID = String(this.orderList.orderID);
            let data = {
                productID:productID,
                orderID:orderID
            };
            await store.router.deleteOrder(data);
            if(store.status.deleteStatus !== '刪除資料成功'){
                alert(store.status.deleteStatus);
                alert("資料刪除失敗,請稍後重試");
            }
            //this.$forceUpdate();
            this.$emit('refresh');
        },
        async updateOrder(){
            let data = {
                productID:this.orderList.productID,
                quantity:this.orderList.number,
                orderID:this.orderList.orderID
            };

            await store.router.updateOrder(data);
            if(store.status.updateOrderStatus !== "更新訂單資料成功"){
                alert("商品數量更改失敗,請稍後再試");
            }else{
                this.$emit('refresh');
            }
        },
        async completeOrder(){
            let data = {
                orderID:this.orderList.orderID
            };
            await store.router.completeOrder(data);
            alert(store.status.completeStatus);
            this.$emit('refresh');
        },    
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
.orderList{
    display:flex;
    flex-flow:wrap;
    //justify-content:space-around;
    align-items:center;
    margin:20px 0;
    padding-top:10px;
    background:#ACD6FF;
}
.orderList .header{
    display:flex;
    align-items:center;
    width:40%;
    padding-left:15px;
    //background:red;
}
.orderList .header img{
    max-width:100px;
    max-height:100px;
    border:1px solid #7B7B7B;
}
.orderList .header h5{
    width:100%;
    font-size:15px;
    text-align:center;
    color:#1212FF;
}
.orderList>p{
    width:15%;
    font-size:15px;
    font-weight:bold;
    text-align:center;
    color:#FF0000;
    //background:green;
}
.orderList .change-number{
    width:15%;
    display:flex;
    justify-content:center;
    //background:blue;
}
.orderList input{
    width:60%;
    text-align:center;
}
.orderList .operating{
    width:15%;
    //background:green;
}
.orderList .operating p{
    font-size:15px;
    font-weight:bold;
    text-align:center;
    color:#0F0F0F;
}
.orderList .operating p:hover{
    color:#1212FF;
    text-decoration:underline;
    cursor:pointer;
}
.orderList .checkout{
    flex-shrink:0;
    width:1000px;
    max-width:100%;
    margin:10px 0 0 0 ;
    display:flex;
    justify-content:flex-end;
    height:30px;
    background:#F5F5F5;
}
.orderList .checkout button{
    width:135px;
    margin-left:15px;
    font-size:17px;
    font-weight:bold;
    border:none;
    background:#0072E3;
    transition:0.3s;
}
.orderList .checkout button:hover{
    background:#2828FF;
    cursor:pointer;
}
.orderList .checkout p{
    width:117px;
    margin:0 15px;
    line-height:30px;
    font-size:15px;
    font-weight:bold;
    text-align:center;
    color:#0F0F0F;
    display:none;
    //background:red;
}
@media(max-width:600px){   /*購物車rwd*/
    .orderList{
        //flex-flow:column;
        //padding:0 20px;
    }
    .orderList .header{
        width:100%;
        justify-content:flex-start;
        padding:0 30px;
        margin-bottom:10px;
    }
    .orderList .header img{
        max-width:80px;
        max-height:80px;
    }
    .orderList>p{
        width:33%;
        //text-align:left;
        //padding:0 30px;
    }
    .orderList .totel{
        display:none;
    }
    .orderList .change-number{
        width:33%;
    }
    .orderList input{
        width:50%;
    }
    .orderList .operating{
        width:33%;
    }
    .orderList .checkout p{
        display:block;
    }
}
</style>