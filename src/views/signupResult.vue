<template>
<div class="signup-result">
  <div>
    <h1>{{registorStatus.status}}</h1>
    <p v-if="registorStatus.err">{{registorStatus.err}} 請重新註冊</p>
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

<style lang="scss">
.signup-result{
    display:flex;
    align-items:center;

    div{
      width:500px;
      margin:50px auto;
      background:#c4d6e8;
    }
}
</style>