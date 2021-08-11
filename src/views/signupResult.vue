<template>
<div class="signup-result">
  <div>
    <h1>{{registorStatus.status}}</h1>
    <p v-if="registorStatus.err">{{status.err}} 請重新註冊</p>
    <p v-else>{{registorStatus.registerMember.name}}註冊成功</p>
    <p>10 秒後將跳轉到首頁</p>
  </div>  
</div>
</template>
<script>
import {store} from '../store.js'
import {mapGetters} from 'vuex'

export default{
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters({
            registorStatus:'getRegistorStatus'
        })
    },
    created(){
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