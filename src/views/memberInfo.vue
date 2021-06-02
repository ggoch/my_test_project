<template>
<div id="memberInfo">
  <div class="container">
    <div class="info">
      <div class="info-header">
        <h3>{{name}}  會員您好</h3>
      </div>
      <div class="info-status">    
        <p>信用值 <span>{{credit}}%</span></p>
        <p>錢包餘額 <span>{{Balance}}元</span></p>
      </div>  
    </div>
    <div class="member-info">
      <label class="memberMenu" for="memberMenu-switch">
        <img src="../assets/icon/menu.png" />
      </label>
      <input type="checkbox" id="memberMenu-switch" />
      <ul :class="active">
        <li class="shoppingCar"><router-link @click.native="makeActive('shoppingCar')" :to="{ path: '/member_info' }">購物車</router-link></li>
        <li class="complete"><router-link @click.native="makeActive('complete')" :to="{ path: '/member_info/complete_order' }">訂單確認</router-link></li>
        <li class="memberData"><router-link @click.native="makeActive('memberData')" :to="{ path: '/member_info/member_profile' }">會員資料</router-link></li>
        <!-- <li>販賣商品</li>
        <li>賣場狀況</li>
        -->
      </ul>
    </div>
    <div class="member-content">
      <router-view />
    </div>
  </div>
</div>
</template>

<script>
import {store} from '../store.js'

export default{
    data(){
        return{
            name:store.state.memberInfo.name,
            credit:100,
            Balance:0,
            active:'shoppingCar'
        }
    },
    methods:{
        makeActive(item){
            this.active = item;
        }
    },
    async mounted(){
        await store.router.checkLogin();
        this.name = store.state.memberInfo.name;
    },
}
</script>

<style>
#memberInfo{
    width:100%;
}
#memberInfo>.container{
    width:1000px;
    max-width:90%;
    //border:1px solid red;
    margin:0 auto;
}
#memberInfo .info{
    display:flex;
    justify-content:space-between;
    margin:10px 0;
    border:1px solid #F0F0F0;
    background:#ECF5FF;
}
#memberInfo .info>div{
    flex:1;
    display:flex;
    align-items:center;
    padding:10px;
}
.info .info-header h3{
    margin-left:30px;
}
.info .info-header img{
    max-width:50px;
    width:50px;
    max-height:50px;
    height:50px;
    border:1px solid blue;
}
.info .info-status{
    justify-content:flex-end;
}
.info .info-status p{
    padding:5px;
    //border:1px solid #000;
    background:#fff;
    border-radius:3px;
}
.info .info-status p:last-child{
    margin-left:30px;
}
.info .info-status span{
    color:#B7FF4A;
}
.info .info-status p:last-child span{
    color:#FFBB77;
}
#memberMenu-switch,
.member-info .memberMenu{
    display:none;
}
.member-info .memberMenu:hover{
    cursor:pointer;
}
.container .member-info ul{
    display:flex;
    border-radius:3px;
    background:#84C1FF;
    //padding:5px 0;	  
}
.member-info ul li:first-child{
    border-radius:3px 0 0 3px;
}
.member-info ul li{
    //border-right:1px solid #0080FF;
    padding:15px;
    color:#fff;
    font-weight:bold;
    transition:0.5s;
    cursor:pointer;
}
.member-info ul li a{
    color:#fff;
}
.member-info ul li:hover{
    background:#0080FF;
}
ul.shoppingCar li.shoppingCar,
ul.complete li.complete,
ul.memberData li.memberData{
    background:#2828FF;
}
@media(max-width:550px){        /*會員列表rwd*/
    .info .info-header h3{
        font-size:16px;
    }
    .info .info-status p{
        font-size:14px;
        display:flex;
        flex-flow:column;
    }
    /*.container .member-info{
        position:relative;
        width:100%;
        background:#84C1FF;
        padding-left:20px;
    }
    .member-info .memberMenu{
        display:block;
    }
    #memberMenu-switch:checked ~ ul{
        transform:translateX(-20px);
    }
    .container .member-info ul{
        position:absolute;
        flex-flow:column;
        transform:translateX(-200%);
        transition:0.4s;
    }*/
    .member-info ul li a{
        font-size:14px;
    }
}
</style>