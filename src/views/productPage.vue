<template>
  <div id="commodity-closeUP">
    <div class="container">
      <div class="closeUP">
        <div class="closeUP-img">
          <img :src="product.img" />
        </div>
        <div class="main">
          <h2>{{product.remark}}</h2>
          <div class="productStatus">
            <dl>
              <dt>商品價格 :</dt>
                <dd>{{product.price}} 元</dd>
            </dl>
            <dl>    
              <dt>上架日期 :</dt>
                <dd>{{time}}</dd>
            </dl>
            <dl>
              <dt>剩餘數量 :</dt>
                <dd>{{product.quantity}}</dd>
            </dl>
            <dl>
              <dt>付款方式 :</dt>
                <dd>
                  <select>
                    <option v-for="pay in pays" :key="pay.id">{{pay}}</option>
                  </select>
                </dd>
            </dl>
          </div>
          <div class="productNumber">
            <from>
              <p>購買數量 :</p>
              <input type="button" @click="lessNumber" value='-' />
              <input type="text" v-model="productNumber" />
              <input type="button" @click="addNumber" value='+' />
            </from>
            <div class="shapping">
              <input type="button" @click="productAddCar" value="加入購物車">              
              <input type="button" @click="construction" value="詢問賣家">
            </div>  
          </div>
        </div>
      </div>
      <!-- <div class="seller">
        <ul>
          <li class="sellerNews">
            <img src="">
            <div class="news">
              <h4>name</h4>
              <a href="#" >id : </a>
            </div>
          </li>
          <li class="sellerProduct">2000 件商品</li>
          <li class="credit">信用度 99%</li>
          <li class="logintime">上次登入時間 2021-03-31</li>
          <li class="servicetime">服務時間 10 點 ~ 20 點</li>
        </ul>
      </div> 
      -->
      <div class="remarks">
        <div class="remarks-container">
          <pre>{{pretest}}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {store} from '../store.js';
import {mapGetters,mapActions} from 'vuex'

export default{
    data(){
        return{
            imgurl:store.state.test.imgurl,
            time:store.state.test.time,
            pays:store.state.test.pay,
            pretest:store.state.pretest,
            productNumber:1,
        }
    },
    computed:{
      ...mapGetters({
        orderStatus:'getOrderStatus',
        product:'getOneProduct'
      })
    },
    methods:{
      ...mapActions([
        'addOrder',
        'showOneProduct'
      ]),
      addNumber(){
        if(this.number > this.productNumber)
        this.productNumber+=1;
      },
      lessNumber(){
        if(this.productNumber > 1)
        this.productNumber-=1;
      },
      async productAddCar(){
        let productID = String(this.product.id);
        let quantity = String(this.productNumber);
        let data = {
          productID:productID,
          quantity:quantity
        }
        await this.addOrder(data);
        if(this.orderStatus.add !== "訂單建立成功"){
          alert("購物車添加失敗,請稍後再試");
        }else{
          alert("購物車添加成功");
        }
      },
      construction(){
        alert("此功能還沒製作完成");
      }
    },
    async mounted(){
      if(sessionStorage.getItem("productID") == null){
        sessionStorage.setItem("productID",localStorage.getItem("productID"));
        localStorage.removeItem("productID");
      }
      let data = {productID:sessionStorage.getItem("productID")};
      await this.showOneProduct(data);
    },
}
</script>

<style>
#commodity-closeUP .container>div{
  width:1100px;
  max-width:100%;
  margin:0 auto;
  //border:1px solid blue;
}
.closeUP{
  display:flex;
  padding:30px 0;
}
.closeUP-img{
  max-width:100%;
  //max-height:420px;
  width:420px;
  height:420px;
  //flex:0 0 420px;
  display:flex;
  justify-content:center;
  margin-right:20px;
  border:1px solid red;
}
.closeUP-img img{
  //width:420px;
  //height:420px;
  max-width:100%;
  max-height:100%;
}
.closeUP .main{
  //max-width:100%;
  width:66%;
  display:flex;
  flex-flow:column;
  padding:5px;
  border:1px solid red;
}
.closeUP .main h2{
  flex:1;
}
.main .productStatus{
  flex:3;
  display:flex;
  flex-flow:column;
  border-bottom:1px solid blue;
}
.productStatus dl{
  flex:1;
  display:flex;
  align-items:center;
  padding:0 5px;
}
.productStatus dl:first-child{
  background:#F0F0F0;
}
.productStatus dl dt{
  width:80px;
  font-size:16px;
  margin-right:10px;
}
.productStatus dl:first-child dd{
  font-size:22px;
  color:#FF8000;
}
.productStatus dl select{
  height:30px;
  font-size:16px;
}
.productStatus dl:last-child{
  flex:2;
}
.main .productNumber{
  flex:2;
  display:flex;
  flex-flow:column;
  padding:0 5px;
}
.main .productNumber from{
  flex:1;
  display:flex;
  align-items:center;
}
.productNumber from p{
  width:80px;
  font-size:16px;
  margin-right:10px;
}
.productNumber from input{
  height:30px;
  width:30px;
  text-align:center;
}
.productNumber from input[type="text"]{
  width:60px;
}
.main .productNumber .shapping{
  flex:1;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding-left:90px;
}
.productNumber .shapping input{
  width:125px;
  height:35px;
  margin-right:20px;
  border:1px solid #000;
  border-radius:3px;
  color:#fff;
  font-size:16px;
  font-weight:700;
  cursor:pointer;
}
.productNumber .shapping input:first-child{
  background:#FF0000;
}
.productNumber .shapping input:first-child:hover{
  background:#EA0000;
}
.productNumber .shapping input:last-child{
  background:#0072E3;
}
.productNumber .shapping input:last-child:hover{
  background:#0066CC;
}
.remarks{
  padding:10px 0;
}
.remarks pre {
  font-size:33px;
  white-space:pre-wrap;
  padding-bottom:30px;
  border-bottom:1px solid blue;
}
@media screen and  (max-width:750px){
  .closeUP{
    flex-flow:column;
    align-items:center;
    padding:0;
  }
  .closeUP-img{
    width:360px;
    margin:0;
    border:none;
  }
  .closeUP .main{
    width:100%;
    border:none;
  }
  .closeUP .main h2{
    font-size:20px;
  }
  .main .productStatus{
    margin-bottom:10px;
  }
  .productStatus dl{
    padding:10px 5px;
  }
  .main .productNumber from{
    margin-bottom:10px;
  }
  .remarks pre{
    font-size:26px;
  }
}
@media screen and  (max-width:420px){
  .closeUP .main h2{
    font-size:16px;
  }
  .remarks pre{
    font-size:18px;
  }
}
</style>