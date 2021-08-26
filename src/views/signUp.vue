<template>
<div id="signUp">
  <div class="container">
    <form>
    <div class="form-data">
      <div>
        <label for="account">帳號</label>
        <input type="text" v-model="account" name="account" id="account" />
        <p>( 長度為6-12個字元，由字母、數字及_符號組成，註冊成功後無法修改。)</p>
      </div>
      <div>
        <label for="password">密碼</label>
        <input type="password" v-model="password" name="password" id="password" />
        <p>( 長度為8字元以上，密碼必須包含“數字”、“英文” ，需要有大寫字母1個以上之組合)</p>
      </div>
      <div>
        <label for="passwordAgain">再輸入一次密碼</label>
        <input type="password" v-model="passwordAgain" name="passwordAgain" id="passwordAgain" />
        <p>{{passwordTest}}</p>
      </div>
      <div>
        <label for="name">名字</label>
        <input type="text" v-model="name" name="name" id="name" />
        <p></p>
      </div>
      <div>
        <label for="email">電子郵件</label>
        <input type="text" v-model="email" name="email" id="email" />
        <p>( 不建議使用Gmail以外的免費電子郵件，EX：yahoo或pchome。)</p>
      </div>
    </div>
    <div class="data-submit">  
      <input type="button" @click="registorSubmit" value="註冊會員" />
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
            account:'',
            password:'',
            passwordAgain:'',
            name:'',
            email:'',
            passwordTest:''
        }
    },
    methods:{
      ...mapActions([
        'registor'
      ]),
      checkData(dataArr){
        for(let i=0;i<dataArr.length;i++){
          if(dataArr[i] == ""){
            return "error";
          }
        }
      },
      async registorSubmit(){
          let name = store.methods.xssCheck(this.name);
          let account = store.methods.xssCheck(this.account);
          let password = store.methods.xssCheck(this.password);
          let email = store.methods.xssCheck(this.email);

          let checkResult = this.checkData([name,account,password,email]);

          if(checkResult == "error"){
            alert("資料未完整輸入");
            return;
          }
          let data = {
            name:name,
            account:account,
            password:password,
            email:email
          };
          await this.registor(data);
          this.$router.push({path:'/sign_up/signup_result'});
      }
    },
    watch:{
        passwordAgain:function(){
            if(this.password !== this.passwordAgain)
              this.passwordTest='密碼錯誤'
            else
              this.passwordTest=''  
        }
    }
}
</script>

<style lang="scss">
#signUp .container{
  margin:20px 0;

  form{
    width:1000px;
    max-width:100%;
    margin:0 auto;

    .form-data{
      display:flex;
      flex-flow:column;
      //justify-content:center;
      margin:20px;
      border-bottom:1px solid blue;

      >div{
        width:100%;
        display:flex;
        //flex-flow:column;
        justify-content:center;
        align-items:center;
        margin:20px 0;

        label{
          width:20%;
          text-align:right;
          font-size:16px;
          margin-right:10px;
        }

        input{
          width:20%;
          max-width:150px;
          height:20px;
          margin-right:10px;
        }

        p{
          width:60%;
          font-size:13px;
          color:#9D9D9D;
        }

        &:nth-child(3) p{
          color:red;
        }
      }
    }

    .data-submit{
      display:flex;
      justify-content:center;
      margin:20px;

      input[type="button"]{
        width:120px;
        height:30px;
        text-align:center;
        line-height:30px;
        background:#FF8000;
        color:#fff;
        border:1px solid #FFBB77;
        border-radius:2px;
        cursor:pointer;

        &:hover{
          background:#FF9224;
        }
      }
    }
  }
}
@media(max-width:576px){
  #signUp .container{
    form{
      .form-data{
        align-items:center;

        >div{
          width:70%;
          flex-flow:column;
          align-items:flex-start;

          label{
            width:100%;
            text-align:left;
            margin-right:0;
            margin-bottom:10px;
          }

          input{
            width:100%;
            margin-right:0;
            margin-bottom:10px;
          }

          p{
            width:100%;
          }
        }
      }
    }
  }
}
</style>