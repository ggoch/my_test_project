<template>
<div id="login">
  <div class="container">
    <form>
      <div class="data-img">
        <img src="../assets/arise2.jpg" />
      </div>
      <div class="login-data">
        <div class="data">
          <h3>登入本網站</h3>
          <input type="text" v-model="email" placeholder="電子郵件" />
          <input type="password" v-model="password" placeholder="密碼" />
        </div>
        <div class="login-button">
          <div>
            <input type="button" @click="login" value="登入">
          </div>
          <div>  
            <input type="button" value="忘記密碼">
            <input type="button" @click="addMember" value="加入會員">
          </div>  
        </div>
        <div class="remind">
          <h4>小提醒</h4>
          <p>本網站不會以電子郵件、或任何方式，
          要求網友提供或認證帳號和密碼資料。 若您收到要求提供帳號密碼的信件，
          請務必聯絡客服中心。並請定期更改您的帳號密碼確保帳號安全</p>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import {store} from '../store.js'

export default{
  data(){
    return{
      password:'',
      email:''
    }
  },
  methods:{
    addMember(){
      this.$router.push({path:'/sign_up'});
    },
    async login(){
      let password = store.methods.xssCheck(this.password);
      let email = store.methods.xssCheck(this.email);
      let data = {
        password:password,
        email:email
      };
      store.status.loginStatus = await store.router.login(data);
      if(store.status.loginStatus == '登入成功'){
        this.$router.push({path:'/'});
      }else{
        alert("登入失敗,請重新登入");
      }
    }
  }  
}
</script>

<style>
#login form{
    width:1000px;
    max-width:100%;
    display:flex;
    margin:50px auto;
    padding:15px;
    border:5px solid #BEBEBE;
}
form .data-img{
    width:60%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-right:1px solid #BEBEBE;
}
form .data-img img{
    max-width:500px;
    max-height:400px;
}
form .login-data{
    width:40%;
    display:flex;
    flex-flow:column;
    //padding:10px;
}
.login-data .data{
    flex:1;
    display:flex;
    flex-flow:column;
    justify-content:space-around;
    align-items:center;

}
.login-data .data h3{
  align-self:flex-start;
  padding-left:10px;
}
.login-data .data input{
    width:300px;
    max-width:100%;
    height:35px;
}
.login-data .login-button{
    flex:1;
    display:flex;
    flex-flow:column;
}
.login-button div{
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
}
.login-button div:first-child input{
    width:150px;
    max-width:100%;
    height:40px;
    font-size:16px;
    color:#fff;
    background:#2894FF;
    transition:0.4s;
}
.login-button div:first-child input:hover{
  background:#0072E3;
  box-shadow: 0px 1px 2px #BEBEBE;
}
.login-button div:last-child input:last-child{
  margin-left:20px;
}
.login-button div input{
    width:100px;
    max-width:100%;
    height:30px;
    font-weight:bold;
    color:#ECECFF;
    border:none;
    background:#97CBFF;
    cursor:pointer;
    border-radius:3px;
    transition:0.4s;
    box-shadow:0 3px 5px #BEBEBE;
}
.login-button div input:hover{
  box-shadow: 0px 1px 2px #BEBEBE;
}
.login-data .remind{
    flex:1;
    padding:0 40px;
}
.login-data .remind p{
    font-size:14px;
    line-height:24px;
    background:#FFDAC8;
    color:#5B5B5B;
}
@media screen and (min-width:600px) and (max-width:900px){  /*登入頁面rwd*/
  #login form{
    margin:30px auto;
  }
  form .data-img img{
    max-width:400px;
    max-height:300px;
  }
  .login-data .data input{
    width:200px;
    height:25px;
  }
  .login-button div:first-child input{
    width:120px;
    height:30px;
  }
  .login-button div input{
    width:80px;
    height:20px;
  }
  .login-data .remind{
    padding:0 20px;
  }
  .login-data .remind p{
    font-size:12px;
    line-height:20px;
  }
}
@media(max-width:600px){
  form .data-img{
    display:none;
  }
  form .login-data{
    width:100%;
    height:350px;
  }
  .login-data .remind{
    padding:0;
  }
}
</style>