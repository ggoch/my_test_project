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
            <input type="button" @click="callLogin" value="登入">
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
import {mapGetters,mapActions} from 'vuex'

export default{
  data(){
    return{
      password:'',
      email:''
    }
  },
  computed:{
    ...mapGetters({
      loginStatus:'getLoginStatus'
    })
  },
  methods:{
    ...mapActions([
      'login'
    ]),
    addMember(){
      this.$router.push({path:'/sign_up'});
    },
    async callLogin(){
      let password = store.methods.xssCheck(this.password);
      let email = store.methods.xssCheck(this.email);
      let data = {
        password:password,
        email:email
      };
      await this.login(data);
      if(this.loginStatus == '登入成功'){
        this.$router.push({path:'/'});
      }else{
        alert("登入失敗,請重新登入");
      }
    }
  }  
}
</script>

<style lang="scss">
#login .container{
  form{
    width:1000px;
    max-width:95%;
    height:450px;
    display:flex;
    margin:50px auto;
    padding:15px;
    border:5px solid #BEBEBE;

    .data-img{
      width:60%;
      display:flex;
      justify-content:center;
      align-items:center;
      border-right:1px solid #BEBEBE;

      img{
        //max-width:500px;
        width:63%;
        max-height:400px;
      }
    }

    .login-data{
      width:40%;
      display:flex;
      flex-flow:column;

      .data{
        //flex:1;
        height:33%;
        display:flex;
        flex-flow:column;
        justify-content:space-around;
        align-items:center;

        h3{
          align-self:flex-start;
          padding-left:10px;
        }

        input{
          width:78%;
          //max-width:100%;
          height:35px;
        }
      }

      .login-button{
        height:33%;
        display:flex;
        flex-flow:column;

        div{
          flex:1;
          display:flex;
          justify-content:center;
          align-items:center;

          &:first-child input{
            width:150px;
            max-width:100%;
            height:40px;
            font-size:16px;
            color:#fff;
            background:#2894FF;
            transition:0.4s;
            &:hover{
              background:#0072E3;
              box-shadow: 0px 1px 2px #BEBEBE;
            }
          }

          &:last-child input:last-child{
            margin-left:20px;
          }
          
          input{
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
            &:hover{
              box-shadow: 0px 1px 2px #BEBEBE;
            }
          }
        }
      }

      .remind{
        height:33%;
        padding:0 40px;

        p{
          font-size:14px;
          line-height:20px;
          background:#FFDAC8;
          color:#5B5B5B;
        }
      }
    }
  }
}
@media screen and (min-width:576px) and (max-width:768px){  /*登入頁面rwd*/
  #login .container{
    form{
      margin:30px auto;

      .login-data{

        .login-button{
          div{
            &:first-child input{
              width:120px;
              height:30px;
            }
  
            input{
              width:80px;
              height:20px;
            }
          }
        }

        .remind{
          padding:0 20px;

          p{
            font-size:12px;
          }
        }
      }
    }
  }
}
@media(max-width:576px){
  #login .container{
    form{
      .data-img{
        display:none;
      }

      .login-data{
        width:100%;

        .remind{
          padding:0;
          p{
            font-size:16px;
          }
        }
      }
    }
  }
}
</style>