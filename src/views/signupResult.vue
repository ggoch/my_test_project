<template>
<div class="signup-result">
  <div>
    <h1>{{status}}</h1>
    <p v-if="registerMember">恭喜{{registerMember.name}}註冊成功</p>
    <p v-if="err">{{err}} 請重新註冊</p>
    <p>10 秒後將跳轉到首頁</p>
  </div>  
</div>
</template>
<script>
import {store} from '../store.js'

export default{
    data(){
        return{
            status:'',
            registerMember:'',
            err:''
        }
    },
    created(){
        this.status = store.status.registorStatus.status;
        if(this.status === '註冊失敗'){
            this.err= store.status.registorStatus.err;
        }else if(this.status === '註冊成功'){
            this.registerMember = store.status.registorStatus.registerMember;
        }
    },
    mounted(){
        setTimeout(() => {this.$router.push({path:'/'})},1000 * 10);
    }
}
</script>

<style>
.signup-result{
    height:200px;
    display:flex;
    align-items:center;
}
.signup-result div{
    width:300px;
    margin:auto;
    border:1px solid red;
}
</style>