<template>
  <div id="app">
    <div class="container">
      <div class="heaterTitle">     <!-- 標頭列 -->
        <!-- <div class="imgHeater">     
          <a href="#"><img src="" /></a>
        </div>
        -->

        <div class="search">        <!-- 搜尋框 -->
          <img src="./assets/icon/search32px.png" />
          <div class="form">
            <input type="text" class="text" v-model="searchName" placeholder="搜尋想要的商品吧" />
            <input type="submit" class="submit" @click="search" value="搜尋" /> 
          </div>  
        </div>

        <div class="login">         <!-- 登入 -->
          <router-link v-if="loginStatus == '登入失敗'"  to='/login'>登入</router-link>
          <router-link v-if="loginStatus == '登入失敗'"  to='/sign_up'>註冊</router-link>
          <router-link v-if="loginStatus == '登入成功'"  to='/member_info'>個人頁面</router-link>
          <router-link v-if="loginStatus == '登入成功'" @click.native="logout" to='/'>登出</router-link>
        </div>
      </div>
      <div class="nav" :class="activeApp">    <!-- 導行列 -->
        <label class="menu" for="menu-switch">
          <img src="./assets/icon/menu.png" />
        </label>
        <input type="checkbox" id="menu-switch" />
        <ul>  
          <li><router-link class="home" @click.native="makeActiveApp('home')" to='/'>首頁</router-link></li>
          <li><router-link class="product_new" @click.native="makeActiveApp('product_new')" to='/product_new'>新品特區</router-link></li>
          <li><router-link class="product" @click.native="makeActiveApp('product')" to='/product'>商品列表</router-link></li>
          <!-- <li><router-link class="pp" to='/pp'>售票預購</router-link></li> -->
        </ul>
      </div>
      <div class="main">
        <router-view />
      </div>  
      <div class = "footer">         <!-- 頁腳 -->
          <div class = "footer-main">
              <div class = "footer-nav">
                  <ul>
                      <li><a href = "#">關於賣場</a></li>
                      <li><a href = "#">常見問題</a></li>
                      <li><a href = "#">新手上路</a></li>
                      <li><a href = "#">聯絡客服</a></li>
                      <li><a href = "#">隱私權政策</a></li>
                  </ul>
              </div>
              <div class = "footer-content">
                <p>本網站為個人學習後做出的作品並無一般購物網站的購買功能,
                購買成功發送的gmail是練習的一部份並沒有訂購成功</p>
                <p>會員註冊請別註冊真實資料本網站沒有保護您資料的能力</p>
              </div>
          </div>
          <div class = "other"></div>
      </div>  
    </div>
  </div>
</template>

<script>
import {store} from './store.js'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'App',
  data(){
    return{
      loginStatus:store.status.loginStatus,
      searchName:'',
      activeApp:'home'
    }
  },
  computed:{
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  methods:{
    ...mapActions([
      'searchProduct',
    ]),
    async logout(){
      localStorage.removeItem('token');
      store.status.loginStatus = "登入失敗";
      this.loginStatus = store.status.loginStatus;
    },
    async search(){
      let searchName = store.methods.xssCheck(this.searchName);
      let data = {
        searchName:searchName
      };
      await this.searchProduct(data);
      if(this.$route.path == '/product'){
        this.$router.replace({path:'/supplierAllBack'});
      }else{
        this.$router.push({path:'/product'});
      }
    },
    makeActiveApp(item){
      this.activeApp = item;
    },
    reload(){
      alert("test2");
      this.isRouterAlive = false;
      this.$nextTick( ()=> { this.isRouterAlive=true } );
    }
  },
  mounted(){
  },
  beforeUpdate(){
    this.loginStatus = store.status.loginStatus;
    switch(this.$route.path){
      case '/product':
      this.activeApp = "product";
      break;
      case '/product_new':
      this.activeApp = "product_new";
      break;
      case "/":
      case "/game":
      case "/boutique":
      case "/book":
      this.activeApp = "home";
      break;
      default:
      this.activeApp = "";
    }
  },
  components: {  
  },
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  text-decoration:none;
}
html,body{
  height:auto;
}
.heaterTitle{                       
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding:30px 20px 30px 20px;
  //background:yellow;
}
.heaterTitle .search .form{            /*搜尋框區塊*/
  border-radius:4px;
  width:500px;
  display:flex;
  box-shadow:2px 2px 3px #888888;
  //background:yellow;
  //border:5px solid red;
}
.heaterTitle .search img{
  display:none;
}
.heaterTitle .search input{
  padding:7px;
}
.heaterTitle .search .text{          /*搜尋框*/
  border:1px solid #000;
  border-right:0px;
  width:75%;
  font-size:16px;
  border-radius:4px 0 0 4px;
}
.heaterTitle .search .submit{         /*搜尋按鈕*/
  border:1px solid #000;
  border-left:0px;
  width:25%;
  font-size:18px;
  border-radius:0 4px 4px 0;
  cursor:pointer;
  transition:0.5s;
}
.heaterTitle .search .submit:hover{
  background:#BEBEBE;
}
@media screen and (min-width:550px) and (max-width:800px){  /*搜尋框rwd練習區*/
  .heaterTitle .search .form{
    width:350px;
  }
  .heaterTitle .search .text{
    font-size:12px;
  }
  .heaterTitle .search .submit{
    font-size:14px;
  }
}
@media(max-width:550px){
  .heaterTitle .search .form{
    width:165px;
  }
  .heaterTitle .search .text{
    font-size:8px;
  }
  .heaterTitle .search .submit{
    font-size:10px;
  }
}
.heaterTitle .login{       /*登入和註冊區塊*/
  width:200px;
  display:flex;
}
.heaterTitle .login a{         /*按鈕樣式*/
  padding:7px;
  width:50%;
  text-align:center;
  font-size:16px;
  font-weight:bold;
  //border:1px solid #000;
  border-radius:4px;
  color:#fff;
  cursor:pointer;
  transition:0.4s;
}
.heaterTitle .login a:first-child{
  margin-right:20px;
  background:green;
}
.heaterTitle .login a:last-child{
  background:#000;
}
.heaterTitle .login a:hover{
  background:#0080FF;
  //color:#000;
  box-shadow: 2px 2px 2px #ADADAD;
}
@media screen and (min-width:550px) and (max-width:800px){   /*登入區塊rwd*/
  .heaterTitle .login{
    width:150px;
  }
  .heaterTitle .login a{
    width:50%;
    font-size:14spx;
    padding:6px 0;
  }
}
@media(max-width:550px){
  .heaterTitle .login{
    width:100px;
    flex-flow:column;
  }
  .heaterTitle .login a{
    width:100%;
    font-size:10px;
    padding:6px 0;
  }
  .heaterTitle .login a:first-child{
    margin-bottom:10px;
  }
}
.nav{                          /*導航區塊*/
  background:#0072E3;
  padding-left:100px;
}
.nav input[type="checkbox"],
.nav .menu{
  display:none;
}
.nav ul{
  display:flex;
}
.nav li a{
  color:#fff;
  font-size:17px;
  margin:0 20px;
  display:flex;
  align-items:center;
  padding:10px;
  height:50px;
  font-weight:bold;
  transition:0.5s;
}
.nav a:hover{
  background:#46A3FF;
}
@media(max-width:550px){    /*導航區rwd*/
  .nav{
    position:relative;
    padding-left:20px;
  }
  .nav .menu{
    padding:10px;
    display:flex;
    align-item:center;
  }
  .nav .menu img:hover{
    cursor:pointer;
  }
  .nav input:checked ~ ul{
    transform:translateX(0);
  }
  .nav ul{
    flex-flow:column;
    position:absolute;
    top:50px;
    left:-20px;
    z-index:1;
    transform:translateX(-100%);
    transition:0.3s;
  }
  .nav li a{
    font-size:14px;
    background:#0072E3;
  }
}
.footer{                          /*頁腳區塊*/
    padding-bottom:100px;
    padding-top:20px;
    background:#C4E1FF;
    border-top:3px solid #BEBEBE;
}
.footer-nav ul{
    display:flex;
    flex-flow:wrap;
    justify-content:center;
    padding:5px;
}
.footer-nav ul a{
    color:#9D9D9D;
    border-right:1px solid #9D9D9D;
    padding:0 5px;
}
.footer-nav ul li:last-child a{
    border:none;
}
.footer-content{
  display:flex;
  flex-flow:column;
  justify-content:center;
  align-items:center;
}
.footer-content p{
  font-size:16px;
  margin:10px;
}
div.home .home,
div.product_new .product_new,
div.product .product{
    background:#2828FF;
    color:#FFFF37;
    border-bottom:3px solid #FFFF37;
}

</style>
